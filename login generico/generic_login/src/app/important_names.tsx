import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ImportantNamesScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Animated.Text entering={FadeInDown.duration(500)} style={styles.title}>Nomes Importantes</Animated.Text>

      <Animated.View entering={FadeInDown.delay(200).duration(600)} style={styles.card}>
        <Text style={styles.cardTitle}>⚛️ Marie Curie</Text>
        <Text style={styles.text}>
          Pioneira na pesquisa da radioatividade, a primeira mulher a ganhar um Prêmio Nobel e a única pessoa a ganhá-lo em duas áreas científicas diferentes (Física e Química).
          Descobriu o polônio e o rádio.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(400).duration(600)} style={styles.card}>
        <Text style={styles.cardTitle}>🔬 Henri Becquerel</Text>
        <Text style={styles.text}>
          Descobriu a radioatividade acidentalmente em 1896, ao observar a emissão de raios por sais de urânio. Compartilhou o Prêmio Nobel de Física com os Curie.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(600).duration(600)} style={styles.card}>
        <Text style={styles.cardTitle}>💥 Ernest Rutherford</Text>
        <Text style={styles.text}>
          Conhecido como o "pai da física nuclear", formulou o modelo atômico de Rutherford e descobriu o núcleo atômico. Também diferenciou as radiações alfa e beta.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(800).duration(600)} style={styles.card}>
        <Text style={styles.cardTitle}>💡 Lise Meitner</Text>
        <Text style={styles.text}>
          Física austríaca que desempenhou um papel fundamental na descoberta da fissão nuclear, embora não tenha recebido o Prêmio Nobel por isso.
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
