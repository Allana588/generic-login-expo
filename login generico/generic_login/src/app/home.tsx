import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();

  const menuItems = [
    {
      title: "Tipos de Radiação",
      desc: "Radiação Alfa (α), Beta (β) e Gama (γ)",
      icon: "☢️",
      route: "/details",
      color: "#10b981", // Esmeralda
    },
    {
      title: "História da Radioatividade",
      desc: "Da descoberta em 1896 aos avanços modernos",
      icon: "📜",
      route: "/history",
      color: "#a855f7", // Roxo
    },
    {
      title: "Fusão e Fissão Nuclear",
      desc: "Como a energia do átomo é liberada",
      icon: "⚛️",
      route: "/fusion_fission",
      color: "#f97316", // Laranja
    },
    {
      title: "Fontes de Radiação",
      desc: "Origens naturais e artificiais no cotidiano",
      icon: "🌍",
      route: "/sources",
      color: "#22c55e", // Verde
    },
    {
      title: "Nomes Importantes",
      desc: "Cientistas que revolucionaram a física nuclear",
      icon: "🧪",
      route: "/important_names",
      color: "#3b82f6", // Azul
    },
    {
      title: "Aplicações e Incidentes",
      desc: "Medicina, indústria, Hiroshima e Goiânia",
      icon: "🏥",
      route: "/applications",
      color: "#ef4444", // Vermelho
    },
    {
      title: "Simulação de Dispersão",
      desc: "Visualize o raio de alcance da radiação",
      icon: "💥",
      route: "/simulation",
      color: "#6366f1", // Índigo
    },
    {
      title: "Quiz do Conhecimento",
      desc: "Teste e avalie o que você aprendeu",
      icon: "🏆",
      route: "/quiz",
      color: "#eab308", // Dourado
    },
  ];

  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View entering={FadeInDown.duration(400)} style={styles.header}>
        <Text style={styles.title}>☢️ Mundo Nuclear</Text>
        <Text style={styles.subtitle}>
          Selecione um tópico para explorar os conceitos da radioatividade
        </Text>

        {isAuthenticated && user && (
          <View style={styles.userBanner}>
            <Text style={styles.userText}>Olá, {user.first_name || user.username || user.email}!</Text>
            <TouchableOpacity onPress={logout} style={styles.logoutButton}>
              <Text style={styles.logoutText}>Sair</Text>
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>

      <View style={styles.menuGrid}>
        {menuItems.map((item, index) => (
          <Animated.View
            key={item.route}
            entering={FadeInDown.delay(index * 70).duration(500)}
          >
            <TouchableOpacity
              style={[styles.card, { borderLeftColor: item.color }]}
              activeOpacity={0.7}
              onPress={() => router.push(item.route as any)}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.cardIcon}>{item.icon}</Text>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardDesc}>{item.desc}</Text>
                </View>
                <Text style={styles.chevron}>›</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.backButtonText}>← Voltar à Tela Inicial</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#facc15",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 6,
    lineHeight: 20,
    maxWidth: 320,
  },
  userBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0f172a",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
    width: "100%",
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  userText: {
    color: "#e2e8f0",
    fontSize: 14,
    fontWeight: "600",
  },
  logoutText: {
    color: "#f87171",
    fontSize: 13,
    fontWeight: "bold",
  },
  logoutButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  menuGrid: {
    gap: 12,
  },
  card: {
    backgroundColor: "#0f172a",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 14,
    borderLeftWidth: 5,
    borderWidth: 1,
    borderRightColor: "#1e293b",
    borderTopColor: "#1e293b",
    borderBottomColor: "#1e293b",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardIcon: {
    fontSize: 26,
    marginRight: 14,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    color: "#f8fafc",
    fontSize: 17,
    fontWeight: "700",
  },
  cardDesc: {
    color: "#94a3b8",
    fontSize: 13,
    marginTop: 3,
    lineHeight: 18,
  },
  chevron: {
    color: "#64748b",
    fontSize: 24,
    fontWeight: "300",
    marginLeft: 8,
  },
  backButton: {
    marginTop: 24,
    alignItems: "center",
    paddingVertical: 12,
  },
  backButtonText: {
    color: "#94a3b8",
    fontSize: 14,
    fontWeight: "600",
  },
});
