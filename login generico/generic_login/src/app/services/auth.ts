import api from './api';
import type { LoginCredentials, RegisterData, TokenPair, User } from '@/types/auth';

export async function loginUser(credentials: LoginCredentials): Promise<TokenPair> {
  const response = await api.post<TokenPair>('/auth/jwt/create/', credentials);
  return response.data;
}

export async function registerUser(data: RegisterData): Promise<void> {
  await api.post('/auth/users/', data);
}

export async function fetchUser(): Promise<User> {
  const response = await api.get<User>('/auth/users/me/');
  return response.data;
}