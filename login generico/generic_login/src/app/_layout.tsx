import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#020617",
        },
        headerTintColor: "#facc15",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="login" options={{ title: "Login", headerShown: false }} />
      <Stack.Screen name="index" options={{ title: "Início", headerShown: false }} />
      <Stack.Screen name="home" options={{ title: "Menu Principal", headerShown: false }} />
      <Stack.Screen name="details" options={{ title: "Tipos de Radiação" }} />
      <Stack.Screen name="history" options={{ title: "História" }} />
      <Stack.Screen name="fusion_fission" options={{ title: "Fusão e Fissão" }} />
      <Stack.Screen name="sources" options={{ title: "Fontes de Radiação" }} />
      <Stack.Screen name="important_names" options={{ title: "Nomes Importantes" }} />
      <Stack.Screen name="applications" options={{ title: "Aplicações e Incidentes" }} />
      {/* Futuras telas de Quiz e Simulação */}
      {/* <Stack.Screen name="quiz" options={{ title: "Quiz" }} /> */}
      {/* <Stack.Screen name="simulation" options={{ title: "Simulação" }} /> */}
    </Stack>
  );
}