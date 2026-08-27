import api from './api';
import type { LoginCredentials, RegisterData, TokenPair, User } from '@/types/auth';

export async function loginUser(credentials: LoginCredentials): Promise<TokenPair> {
  return {
    access: 'fake-access-token',
    refresh: 'fake-refresh-token',
  };
}

export async function registerUser(data: RegisterData): Promise<void> {
  return;
}

export async function fetchUser(): Promise<User> {
  return {
    id: 1,
    username: 'UsuarioTeste',
    email: 'elianebaldan26@gmail.com',
  } as User;
}