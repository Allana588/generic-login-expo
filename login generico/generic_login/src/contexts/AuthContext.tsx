import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { AuthContextType, LoginCredentials, RegisterData, User } from '@/app/types/auth';
import { loginUser, registerUser, fetchUser } from '@/app/services/auth';

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Verifica se já está logado ao abrir o app
  useEffect(() => {
    (async () => {
      try {
        // API v3 do AsyncStorage (Bug 3)
        const stored = await AsyncStorage.getMany([
          '@access_token',
          '@refresh_token',
          '@user',
        ]);

        const storedAccess = stored['@access_token'];
        const storedRefresh = stored['@refresh_token'];
        const storedUser = stored['@user'];

        if (storedAccess && storedRefresh) {
          setAccessToken(storedAccess);
          setRefreshToken(storedRefresh);

          if (storedUser) {
            setUser(JSON.parse(storedUser));
          }

          try {
            const freshUser = await fetchUser();
            setUser(freshUser);
            await AsyncStorage.setItem('@user', JSON.stringify(freshUser));
          } catch {
            setUser(storedUser ? JSON.parse(storedUser) : null);
          }
        }
      } catch {
        // Se der erro ao ler storage, não faz nada (user continua null)
      } finally {
        setIsLoading(false); // CRUCIAL: tira o app do estado de loading
      }
    })();
  }, []);

  // Função de Login
  const login = useCallback(async (credentials: LoginCredentials) => {
    const tokens = await loginUser(credentials);
    
    // ORDEM IMPORTANTE: Salvar no storage ANTES de fetchUser
    await AsyncStorage.setItem('@access_token', tokens.access);
    await AsyncStorage.setItem('@refresh_token', tokens.refresh);
    
    setAccessToken(tokens.access);
    setRefreshToken(tokens.refresh);
    
    const freshUser = await fetchUser(); // O interceptor vai usar o token salvo acima
    setUser(freshUser);
    await AsyncStorage.setItem('@user', JSON.stringify(freshUser));
  }, []);

  // Função de Registro
  const register = useCallback(async (data: RegisterData) => {
    await registerUser(data);
  }, []);

  // Função de Logout
  const logout = useCallback(async () => {
    await AsyncStorage.removeMany(['@access_token', '@refresh_token', '@user']);
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);
  }, []);

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      accessToken,
      refreshToken,
      isLoading,
      isAuthenticated: !!user,
      login,
      register,
      logout,
    }),
    [user, accessToken, refreshToken, isLoading, login, register, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}