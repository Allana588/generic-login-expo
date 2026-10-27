import { Stack } from "expo-router";
import { AuthProvider } from "@/contexts/AuthContext";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <AuthProvider>
      <StatusBar style="light" backgroundColor="#020617" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#020617",
          },
          headerTintColor: "#facc15",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
          },
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: "#020617",
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Início", headerShown: false }} />
        <Stack.Screen name="login" options={{ title: "Login", headerShown: false }} />
        <Stack.Screen name="home" options={{ title: "Menu Principal", headerShown: false }} />
        <Stack.Screen name="details" options={{ title: "Tipos de Radiação" }} />
        <Stack.Screen name="history" options={{ title: "História da Radioatividade" }} />
        <Stack.Screen name="fusion_fission" options={{ title: "Fusão e Fissão Nuclear" }} />
        <Stack.Screen name="sources" options={{ title: "Fontes de Radiação" }} />
        <Stack.Screen name="important_names" options={{ title: "Nomes Importantes" }} />
        <Stack.Screen name="applications" options={{ title: "Aplicações e Incidentes" }} />
        <Stack.Screen name="quiz" options={{ title: "Quiz Interativo" }} /> 
        <Stack.Screen name="simulation" options={{ title: "Simulação de Dispersão" }} /> 
      </Stack>
    </AuthProvider>
  );
}
