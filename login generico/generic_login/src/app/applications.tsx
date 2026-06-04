import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Applications() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Aplicações da Radiação</Text>
      <View style={[styles.card, styles.medicine]}>
        <Text style={styles.cardTitle}>Medicina</Text>
        <Text style={styles.text}>
          Na medicina, a radiação é usada em diagnósticos (raio-X, tomografia, medicina nuclear) e tratamentos (radioterapia para câncer), salvando vidas e melhorando a qualidade de vida.
        </Text>
      </View>
      <View style={[styles.card, styles.industry]}>
        <Text style={styles.cardTitle}>Indústria</Text>
        <Text style={styles.text}>
          Na indústria, a radiação é empregada para esterilização de equipamentos, controle de qualidade de produtos, medição de espessuras e densidades, e na conservação de alimentos.
        </Text>
      </View>
      <View style={[styles.card, styles.agriculture]}>
        <Text style={styles.cardTitle}>Agricultura</Text>
        <Text style={styles.text}>
          Na agricultura, a radiação é utilizada para melhorar sementes, controlar pragas, prolongar a vida útil de alimentos e rastrear nutrientes no solo, contribuindo para a segurança alimentar.
        </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          🌱 A radiação tem diversas aplicações benéficas para a humanidade!
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
  medicine: {
    borderLeftWidth: 4,
    borderLeftColor: "#22c55e", // verde
  },
  industry: {
    borderLeftWidth: 4,
    borderLeftColor: "#3b82f6", // azul
  },
  agriculture: {
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