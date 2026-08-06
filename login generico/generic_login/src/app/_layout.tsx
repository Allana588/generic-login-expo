
import { Stack, useRouter, useSegments } from 'expo-router';
import { useContext, useEffect } from 'react';
import { AuthProvider, AuthContext } from '@/contexts/AuthContext';

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