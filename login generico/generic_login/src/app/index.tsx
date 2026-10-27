import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInUp.duration(700)} style={styles.header}>
        <Text style={styles.badge}>CIÊNCIA & EDUCAÇÃO</Text>
        <Text style={styles.title}>☢️ Mundo da Radioatividade</Text>
        <Text style={styles.subtitle}>
          Descubra o fascinante universo da física nuclear: tipos de radiação, histórico, reações atômicas, impactos e simulações.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(200).duration(700)} style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.8}
          onPress={() => router.push("/home")}
        >
          <Text style={styles.primaryButtonText}>Explorar Conteúdo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          activeOpacity={0.8}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.secondaryButtonText}>Acessar Conta</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(400).duration(700)} style={styles.infoBox}>
        <Text style={styles.curiosity}>
          💡 <Text style={styles.curiosityHighlight}>Você sabia?</Text> A radiação está presente naturalmente nas rochas, no solo e até nos alimentos que consumimos todos os dias!
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 35,
  },
  badge: {
    fontSize: 12,
    fontWeight: "800",
    color: "#facc15",
    letterSpacing: 2,
    marginBottom: 12,
    backgroundColor: "#1e293b",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
    color: "#facc15",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 15,
    color: "#94a3b8",
    textAlign: "center",
    lineHeight: 23,
    maxWidth: 320,
  },
  actionContainer: {
    width: "100%",
    maxWidth: 320,
    gap: 12,
  },
  primaryButton: {
    backgroundColor: "#facc15",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: "#facc15",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  primaryButtonText: {
    color: "#020617",
    fontWeight: "800",
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: "#0f172a",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#334155",
  },
  secondaryButtonText: {
    color: "#cbd5e1",
    fontWeight: "600",
    fontSize: 15,
  },
  infoBox: {
    marginTop: 40,
    padding: 16,
    borderRadius: 14,
    backgroundColor: "#022c22",
    borderWidth: 1,
    borderColor: "#065f46",
    maxWidth: 340,
  },
  curiosity: {
    color: "#86efac",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 20,
  },
  curiosityHighlight: {
    fontWeight: "bold",
    color: "#4ade80",
  },
});
