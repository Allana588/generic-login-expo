import { View, Text, StyleSheet, ScrollView } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function DetailsScreen() {
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Animated.Text entering={FadeInDown.duration(400)} style={styles.title}>
        ☢️ Tipos de Radiação
      </Animated.Text>
      <Animated.Text entering={FadeInDown.delay(100).duration(400)} style={styles.subtitle}>
        As emissões nucleares dividem-se em três tipos principais, com diferentes massas, cargas e poderes de penetração.
      </Animated.Text>

      <Animated.View entering={FadeInDown.delay(200).duration(500)} style={[styles.card, styles.alpha]}>
        <View style={styles.badgeRow}>
          <Text style={styles.cardTitle}>Radiação Alfa (α)</Text>
          <Text style={[styles.badge, { backgroundColor: "#14532d", color: "#4ade80" }]}>Baixa Penetração</Text>
        </View>
        <Text style={styles.text}>
          Constituída por partículas pesadas com carga elétrica positiva (núcleos de Hélio formados por 2 prótons e 2 nêutrons). 
        </Text>
        <Text style={styles.subtext}>
          🛡️ <Text style={styles.bold}>Barreira:</Text> Uma simples folha de papel ou a camada superficial da pele humana é capaz de bloqueá-la.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(350).duration(500)} style={[styles.card, styles.beta]}>
        <View style={styles.badgeRow}>
          <Text style={styles.cardTitle}>Radiação Beta (β)</Text>
          <Text style={[styles.badge, { backgroundColor: "#1e3a8a", color: "#60a5fa" }]}>Média Penetração</Text>
        </View>
        <Text style={styles.text}>
          Partículas leves de alta velocidade com carga negativa (elétrons) ou positiva (pósitrons), emitidas na transformação de um nêutron ou próton dentro do núcleo instável.
        </Text>
        <Text style={styles.subtext}>
          🛡️ <Text style={styles.bold}>Barreira:</Text> Atravessa papel e a pele humana, mas é detida por placas de alumínio ou acrílico de alguns milímetros.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(500).duration(500)} style={[styles.card, styles.gamma]}>
        <View style={styles.badgeRow}>
          <Text style={styles.cardTitle}>Radiação Gama (γ)</Text>
          <Text style={[styles.badge, { backgroundColor: "#7f1d1d", color: "#f87171" }]}>Altíssima Penetração</Text>
        </View>
        <Text style={styles.text}>
          Ao contrário das partículas alfa e beta, a radiação gama é uma onda eletromagnética de frequência altíssima e sem carga elétrica, extremamente energética.
        </Text>
        <Text style={styles.subtext}>
          🛡️ <Text style={styles.bold}>Barreira:</Text> Exige blindagens muito densas, como paredes espessas de chumbo ou blocos maciços de concreto.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(650).duration(500)} style={styles.infoBox}>
        <Text style={styles.infoText}>
          💡 <Text style={styles.bold}>Fique atento:</Text> Embora a radiação alfa tenha baixo poder de penetração externa, se ingerida ou inalada ela é extremamente danosa às células devido à sua alta ionização.
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
  alpha: {
    borderLeftWidth: 5,
    borderLeftColor: "#22c55e",
  },
  beta: {
    borderLeftWidth: 5,
    borderLeftColor: "#3b82f6",
  },
  gamma: {
    borderLeftWidth: 5,
    borderLeftColor: "#ef4444",
  },
  badgeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: {
    color: "#facc15",
    fontSize: 19,
    fontWeight: "bold",
  },
  badge: {
    fontSize: 11,
    fontWeight: "bold",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  text: {
    color: "#e2e8f0",
    fontSize: 15,
    lineHeight: 22,
  },
  subtext: {
    color: "#cbd5e1",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#1e293b",
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
