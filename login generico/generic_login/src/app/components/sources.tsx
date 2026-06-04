import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Sources() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Fontes de Radiação</Text>
      <View style={[styles.card, styles.natural]}>
        <Text style={styles.cardTitle}>Fontes Naturais</Text>
        <Text style={styles.text}>
          A radiação natural está presente em nosso dia a dia, vinda do espaço, do solo (elementos radioativos como urânio ) e até mesmo de alimentos e do nosso próprio corpo.
        </Text>
      </View>
      <View style={[styles.card, styles.artificial]}>
        <Text style={styles.cardTitle}>Fontes Artificiais</Text>
        <Text style={styles.text}>
          As fontes artificiais de radiação são criadas pelo homem e incluem equipamentos médicos (raio-X, tomografia), usinas nucleares, detectores de fumaça e alguns produtos de consumo.
        </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          🌍 A maior parte da radiação a que somos expostos é de origem natural!
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
  natural: {
    borderLeftWidth: 4,
    borderLeftColor: "#22c55e", // verde
  },
  artificial: {
    borderLeftWidth: 4,
    borderLeftColor: "#3b82f6", // azul
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