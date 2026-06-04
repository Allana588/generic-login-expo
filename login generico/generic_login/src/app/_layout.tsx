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
    
      <Stack.Screen name="index" options={{ title: "Início", headerShown: false }} />
      <Stack.Screen name="home" options={{ title: "Menu Principal" }} />
      <Stack.Screen name="details" options={{ title: "Detalhes" }} />
      <Stack.Screen name="sources" options={{ title: "Fontes" }} />
      <Stack.Screen name="applications" options={{ title: "Aplicações" }} />
    </Stack>
  );
}
