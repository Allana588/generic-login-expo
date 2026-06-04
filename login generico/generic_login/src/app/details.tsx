import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Details() {
  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>☢️ Tipos de Radiação</Text>

      <View style={[styles.card, styles.alpha]}>
        <Text style={styles.cardTitle}>Radiação Alfa (α)</Text>
        <Text style={styles.text}>
          Partículas pesadas com carga positiva. 
          Possuem baixo poder de penetração e podem ser bloqueadas por papel.
        </Text>
      </View>

      <View style={[styles.card, styles.beta]}>
        <Text style={styles.cardTitle}>Radiação Beta (β)</Text>
        <Text style={styles.text}>
          Partículas mais leves e com maior penetração que a alfa.
          Podem atravessar materiais como papel, mas são barradas por alumínio.
        </Text>
      </View>

      <View style={[styles.card, styles.gamma]}>
        <Text style={styles.cardTitle}>Radiação Gama (γ)</Text>
        <Text style={styles.text}>
          Ondas eletromagnéticas de alta energia.
          Possuem alto poder de penetração e exigem materiais densos como chumbo para bloqueio.
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          💡 A radiação está presente naturalmente no ambiente e até no corpo humano!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 16,
  },

  title: {
    fontSize: 26,
    color: "#facc15",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 25,
    letterSpacing: 1,
  },

  card: {
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
    backgroundColor: "#0f172a",

    borderWidth: 1,
    borderColor: "#1e293b",

    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },

  // 🔥 cores diferentes pra cada tipo (fica MUITO mais interessante)
  alpha: {
    borderLeftWidth: 4,
    borderLeftColor: "#22c55e", // verde
  },

  beta: {
    borderLeftWidth: 4,
    borderLeftColor: "#3b82f6", // azul
  },

  gamma: {
    borderLeftWidth: 4,
    borderLeftColor: "#ef4444", // vermelho
  },

  cardTitle: {
    color: "#facc15",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },

  text: {
    color: "#e5e7eb",
    fontSize: 15,
    lineHeight: 22,
  },

  infoBox: {
    backgroundColor: "#022c22",
    padding: 18,
    borderRadius: 16,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#065f46",
  },

  infoText: {
    color: "#4ade80",
    textAlign: "center",
    fontSize: 14,
  },
});