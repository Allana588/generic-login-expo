import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function HistoryScreen() {
  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Animated.Text entering={FadeInDown.duration(400)} style={styles.title}>
        História da Radioatividade
      </Animated.Text>
      <Animated.Text entering={FadeInDown.delay(100).duration(400)} style={styles.subtitle}>
        Uma cronologia dos principais momentos que transformaram nossa compreensão da matéria.
      </Animated.Text>

      <Animated.View entering={FadeInDown.delay(200).duration(600)} style={styles.card}>
        <View style={styles.yearBadge}>
          <Text style={styles.yearText}>1896</Text>
        </View>
        <Text style={styles.cardTitle}>A Descoberta Acidental</Text>
        <Text style={styles.text}>
          Henri Becquerel observou que sais de urânio emitiam raios espontâneos capazes de escurecer chapas fotográficas no escuro, sem nenhuma fonte externa de luz solar. Esse fenômeno marcou o nascimento da física moderna.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(400).duration(600)} style={styles.card}>
        <View style={styles.yearBadge}>
          <Text style={styles.yearText}>1898 - 1903</Text>
        </View>
        <Text style={styles.cardTitle}>O Casal Curie e Novos Elementos</Text>
        <Text style={styles.text}>
          Marie e Pierre Curie aprofundaram as investigações, cunharam o termo "radioatividade" e isolaram dois novos elementos químicos na pechblenda: o polônio e o rádio. Em 1903, compartilharam o Nobel de Física com Becquerel.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(600).duration(600)} style={styles.card}>
        <View style={styles.yearBadge}>
          <Text style={styles.yearText}>1911 - 1938</Text>
        </View>
        <Text style={styles.cardTitle}>O Núcleo e a Fissão Nuclear</Text>
        <Text style={styles.text}>
          Ernest Rutherford descobriu a existência do núcleo atômico em 1911. Décadas depois, em 1938, Otto Hahn, Lise Meitner e Fritz Strassmann comprovaram a fissão do átomo de urânio, liberando quantidades colossais de energia.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(800).duration(600)} style={styles.card}>
        <View style={styles.yearBadge}>
          <Text style={styles.yearText}>Era Atual</Text>
        </View>
        <Text style={styles.cardTitle}>Energia e Medicina Moderna</Text>
        <Text style={styles.text}>
          Hoje, a tecnologia nuclear fornece cerca de 10% da eletricidade mundial em usinas de baixo carbono e é pilar indispensável na medicina oncológica, salvando milhões de vidas diariamente.
        </Text>
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
    borderLeftWidth: 5,
    borderLeftColor: '#a855f7',
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
  yearBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#3b0764',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginBottom: 8,
  },
  yearText: {
    color: '#d8b4fe',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#facc15',
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    color: '#e2e8f0',
    lineHeight: 23,
  },
});
