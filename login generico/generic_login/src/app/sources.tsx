import { View, Text, StyleSheet, ScrollView } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function SourcesScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Animated.Text entering={FadeInDown.duration(400)} style={styles.title}>
        Fontes de Radiação
      </Animated.Text>
      <Animated.Text entering={FadeInDown.delay(100).duration(400)} style={styles.subtitle}>
        A radiação que nos cerca tem origens naturais e artificiais produzidas pelo ser humano.
      </Animated.Text>

      <Animated.View entering={FadeInDown.delay(200).duration(500)} style={[styles.card, styles.natural]}>
        <Text style={styles.cardTitle}>🌱 Fontes Naturais (Fundo Natural)</Text>
        <Text style={styles.text}>
          A radiação natural sempre esteve presente no universo e na Terra. Ela provém de:
        </Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>• <Text style={styles.bold}>Raios Cósmicos:</Text> Partículas de alta energia vindas do espaço profundo e do Sol.</Text>
          <Text style={styles.bulletItem}>• <Text style={styles.bold}>Radiação Terrestre:</Text> Minerais presentes na crosta terrestre, como Urânio, Tório e Gás Radônio.</Text>
          <Text style={styles.bulletItem}>• <Text style={styles.bold}>Corpo Humano & Alimentos:</Text> Contemos isótopos naturais como o Potássio-40 (abundante na banana) e Carbono-14.</Text>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(400).duration(500)} style={[styles.card, styles.artificial]}>
        <Text style={styles.cardTitle}>⚙️ Fontes Artificiais (Criadas pelo Homem)</Text>
        <Text style={styles.text}>
          Desenvolvidas a partir do domínio científico e tecnológico:
        </Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>• <Text style={styles.bold}>Diagnóstico e Terapia:</Text> Aparelhos de Raio-X, Tomografias Computadorizadas e Radioterapia.</Text>
          <Text style={styles.bulletItem}>• <Text style={styles.bold}>Geração de Energia:</Text> Reatores em usinas nucleares operando por fissão atômica.</Text>
          <Text style={styles.bulletItem}>• <Text style={styles.bold}>Indústria e Cotidiano:</Text> Detectores de fumaça iônicos (Amerício-241) e conservação de alimentos.</Text>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(600).duration(500)} style={styles.infoBox}>
        <Text style={styles.infoText}>
          🌍 <Text style={styles.bold}>Curiosidade:</Text> Mais de 80% de toda a dose anual de radiação que uma pessoa comum recebe vem de fontes naturais ao nosso redor!
        </Text>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    color: "#facc15",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#94a3b8",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 24,
  },
  card: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    backgroundColor: "#0f172a",
    borderWidth: 1,
    borderColor: "#1e293b",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 4,
  },
  natural: {
    borderLeftWidth: 5,
    borderLeftColor: "#22c55e",
  },
  artificial: {
    borderLeftWidth: 5,
    borderLeftColor: "#3b82f6",
  },
  cardTitle: {
    color: "#facc15",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    color: "#e2e8f0",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 8,
  },
  bulletList: {
    gap: 6,
    marginTop: 4,
  },
  bulletItem: {
    color: "#cbd5e1",
    fontSize: 14,
    lineHeight: 20,
  },
  bold: {
    fontWeight: "bold",
    color: "#f8fafc",
  },
  infoBox: {
    backgroundColor: "#022c22",
    padding: 18,
    borderRadius: 14,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#065f46",
  },
  infoText: {
    color: "#86efac",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
  },
});
