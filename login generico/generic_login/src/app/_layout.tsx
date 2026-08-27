
import { Stack, useRouter, useSegments } from 'expo-router';
import { useContext, useEffect } from 'react';
import { AuthProvider, AuthContext } from '../contexts/AuthContext';

function ProtectedStack() {
  const { user, isLoading } = useContext(AuthContext);
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    
    // Bug fix: cast segments para string[]
    const isOnIndex = (segments as string[]).length === 0;

    if (!user && !isOnIndex) {
      router.replace('/'); // Se não logado, manda pro login
    }
  }, [user, segments, isLoading]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Login' }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function _Layout() {
  return (
    <AuthProvider>
      <ProtectedStack />
    </AuthProvider>
  );
}

TypeScript
import React, { useRef, useEffect } from 'react';
import { View } from 'react-native';
// importe sua função de logout (ex: useAuth)
import { useAuth } from '../hooks/useAuth'; 

export default function RootLayout() {
  const { signOut } = useAuth(); // Função que desloga o usuário
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    // 5 minutos = 300.000 milissegundos
    timerRef.current = setTimeout(() => {
      signOut();
    }, 5 * 60 * 1000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <View style={{ flex: 1 }} onTouchStart={resetTimer}>
      {/* Seus componentes/rotas entram aqui */}
    </View>
  );
}