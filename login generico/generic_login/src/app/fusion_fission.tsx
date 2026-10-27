import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function FusionFissionScreen() {
  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Animated.Text entering={FadeInDown.duration(400)} style={styles.title}>
        Fusão e Fissão Nuclear
      </Animated.Text>
      <Animated.Text entering={FadeInDown.delay(100).duration(400)} style={styles.subtitle}>
        As duas formas mais poderosas de liberar a energia concentrada no núcleo dos átomos.
      </Animated.Text>

      {/* Card Fissão */}
      <Animated.View entering={FadeInDown.delay(200).duration(600)} style={[styles.card, styles.fissionCard]}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardIcon}>💥</Text>
          <View>
            <Text style={styles.cardTitle}>Fissão Nuclear</Text>
            <Text style={styles.cardSubtitle}>Divisão de Núcleos Pesados</Text>
          </View>
        </View>
        <Text style={styles.text}>
          Processo no qual um núcleo pesado (como o <Text style={styles.highlight}>Urânio-235</Text> ou <Text style={styles.highlight}>Plutônio-239</Text>) é bombardeado por um nêutron, tornando-se instável e partindo-se em dois fragmentos menores.
        </Text>
        <View style={styles.statsBox}>
          <Text style={styles.statsItem}>• <Text style={styles.bold}>Aplicações:</Text> Usinas nucleares atuais e submarinos nucleares.</Text>
          <Text style={styles.statsItem}>• <Text style={styles.bold}>Desafio:</Text> Produção de resíduos radioativos de longa vida (lixo nuclear).</Text>
        </View>
      </Animated.View>

      {/* Card Fusão */}
      <Animated.View entering={FadeInDown.delay(400).duration(600)} style={[styles.card, styles.fusionCard]}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardIcon}>☀️</Text>
          <View>
            <Text style={styles.cardTitle}>Fusão Nuclear</Text>
            <Text style={styles.cardSubtitle}>União de Núcleos Leves</Text>
          </View>
        </View>
        <Text style={styles.text}>
          Processo oposto: dois núcleos leves (como isótopos de hidrogênio: <Text style={styles.highlight}>Deutério</Text> e <Text style={styles.highlight}>Trítio</Text>) colidem sob pressões e temperaturas de milhões de graus, fundindo-se em um núcleo de Hélio e liberando muito mais energia que a fissão.
        </Text>
        <View style={styles.statsBox}>
          <Text style={styles.statsItem}>• <Text style={styles.bold}>Onde ocorre:</Text> No núcleo do Sol e das estrelas.</Text>
          <Text style={styles.statsItem}>• <Text style={styles.bold}>Vantagem:</Text> Não gera lixo nuclear de longa duração e usa combustível abundante (água do mar).</Text>
        </View>
      </Animated.View>

      {/* Quadro Comparativo */}
      <Animated.View entering={FadeInDown.delay(600).duration(600)} style={styles.compareCard}>
        <Text style={styles.compareTitle}>⚖️ Resumo Comparativo</Text>
        <View style={styles.compareRow}>
          <View style={styles.compareCol}>
            <Text style={styles.compareColHeader}>FISSÃO</Text>
            <Text style={styles.compareText}>• Quebra do átomo</Text>
            <Text style={styles.compareText}>• Núcleos pesados</Text>
            <Text style={styles.compareText}>• Reatores comerciais hoje</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.compareCol}>
            <Text style={styles.compareColHeader}>FUSÃO</Text>
            <Text style={styles.compareText}>• União de átomos</Text>
            <Text style={styles.compareText}>• Núcleos leves (H)</Text>
            <Text style={styles.compareText}>• Reatores em pesquisa (ITER)</Text>
          </View>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#facc15',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#0f172a',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderRightColor: '#1e293b',
    borderTopColor: '#1e293b',
    borderBottomColor: '#1e293b',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  fissionCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#f97316',
  },
  fusionCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#eab308',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardIcon: {
    fontSize: 28,
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#facc15',
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 2,
  },
  text: {
    fontSize: 15,
    color: '#e2e8f0',
    lineHeight: 23,
  },
  highlight: {
    color: '#facc15',
    fontWeight: 'bold',
  },
  statsBox: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
    gap: 6,
  },
  statsItem: {
    fontSize: 13,
    color: '#cbd5e1',
    lineHeight: 19,
  },
  bold: {
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  compareCard: {
    backgroundColor: '#0b1329',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#1e3a8a',
    marginTop: 8,
  },
  compareTitle: {
    color: '#93c5fd',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 14,
  },
  compareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  compareCol: {
    flex: 1,
    paddingHorizontal: 8,
  },
  compareColHeader: {
    color: '#facc15',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
  compareText: {
    color: '#cbd5e1',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 4,
  },
  divider: {
    width: 1,
    backgroundColor: '#1e3a8a',
  },
});
