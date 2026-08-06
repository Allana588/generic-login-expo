import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function FusionFissionScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Animated.Text entering={FadeInDown.duration(500)} style={styles.title}>Fusão e Fissão Nuclear</Animated.Text>

      <Animated.View entering={FadeInDown.delay(200).duration(600)} style={styles.card}>
        <Text style={styles.cardTitle}>⚛️ Fissão Nuclear</Text>
        <Text style={styles.text}>
          A fissão nuclear é o processo de divisão de um núcleo atômico pesado em dois ou mais núcleos menores, 
          liberando uma enorme quantidade de energia. Este processo é utilizado em reatores nucleares para 
          geração de eletricidade e em armas atômicas.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(400).duration(600)} style={styles.card}>
        <Text style={styles.cardTitle}>☀️ Fusão Nuclear</Text>
        <Text style={styles.text}>
          A fusão nuclear é o processo inverso da fissão, onde dois ou mais núcleos atômicos leves se unem para 
          formar um núcleo mais pesado, também liberando grande quantidade de energia. É o processo que alimenta 
          o Sol e outras estrelas, e é uma promessa para energia limpa no futuro.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(600).duration(600)} style={styles.card}>
        <Text style={styles.cardTitle}>Diferenças Chave</Text>
        <Text style={styles.text}>
          Enquanto a fissão divide núcleos pesados, a fusão une núcleos leves. Ambos os processos liberam energia, 
          mas a fusão requer condições extremas de temperatura e pressão, difíceis de replicar na Terra.
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
    borderLeftColor: '#f97316',
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
