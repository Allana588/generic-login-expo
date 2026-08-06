import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

// URL base adaptativa (Evita o Bug 2)
const BASE_URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:8000/api/v1'         // Emulador Android
    : 'http://localhost:8000/api/v1';        // iOS, Web, dispositivo físico

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// INTERCEPTOR DE REQUEST (Injeta o token automaticamente)
api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await AsyncStorage.getItem('@access_token');
    if (token && config.headers) {
      config.headers.Authorization = `JWT ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// MECANISMO DE REFRESH COM FILA
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}> = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else if (token) {
      resolve(token);
    }
  });
  failedQueue = [];
};

// INTERCEPTOR DE RESPONSE (Faz o refresh automático no erro 401)
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise<string>((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `JWT ${token}`;
          }
          return api(originalRequest);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = await AsyncStorage.getItem('@refresh_token');

      if (!refreshToken) {
        isRefreshing = false;
        // Usando API v3 do AsyncStorage (Bug 3)
        await AsyncStorage.removeMany(['@access_token', '@refresh_token', '@user']);
        return Promise.reject(error);
      }

      try {
        // Usa axios direto, não a instância 'api', para evitar loop
        const response = await axios.post(`${BASE_URL}/auth/jwt/refresh/`, {
          refresh: refreshToken,
        });

        const newAccess = response.data.access;
        await AsyncStorage.setItem('@access_token', newAccess);

        processQueue(null, newAccess);
        isRefreshing = false;

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `JWT ${newAccess}`;
        }
        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        isRefreshing = false;
        await AsyncStorage.removeMany(['@access_token', '@refresh_token', '@user']);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;