import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function HistoryScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Animated.Text entering={FadeInDown.duration(500)} style={styles.title}>História da Radioatividade</Animated.Text>

      <Animated.View entering={FadeInDown.delay(200).duration(600)} style={styles.card}>
        <Text style={styles.cardTitle}>A Descoberta (1896)</Text>
        <Text style={styles.text}>
          Henri Becquerel descobriu acidentalmente a radioatividade ao observar que sais de urânio emitiam raios capazes de 
          escurecer chapas fotográficas, mesmo sem exposição à luz solar. Este evento marcou o início de uma nova era na física.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(400).duration(600)} style={styles.card}>
        <Text style={styles.cardTitle}>Os Curie e o Polônio/Rádio</Text>
        <Text style={styles.text}>
          Marie e Pierre Curie aprofundaram os estudos de Becquerel, isolando dois novos elementos altamente radioativos: 
          o polônio e o rádio. Seus trabalhos foram cruciais para entender a natureza da radioatividade e suas aplicações.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(600).duration(600)} style={styles.card}>
        <Text style={styles.cardTitle}>A Era Atômica</Text>
        <Text style={styles.text}>
          A descoberta da radioatividade abriu caminho para a compreensão da estrutura atômica, o desenvolvimento da energia nuclear 
          e suas diversas aplicações, desde a medicina até a geração de energia, mas também para o desenvolvimento de armas nucleares.
        </Text>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#facc15',
    textAlign: 'center',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#0f172a',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#8b5cf6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#facc15',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#e2e8f0',
    lineHeight: 24,
  },
});
