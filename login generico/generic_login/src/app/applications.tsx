import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ApplicationsScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Animated.Text entering={FadeInDown.duration(500)} style={styles.title}>Aplicações e Incidentes da Radiação</Animated.Text>

      <Animated.View entering={FadeInDown.delay(200).duration(600)} style={styles.card}>
        <Text style={styles.cardTitle}>🏥 Medicina Nuclear</Text>
        <Text style={styles.text}>
          A radiação é essencial em diagnósticos (raio-X, PET scans) e tratamentos (radioterapia para câncer), 
          salvando milhões de vidas anualmente.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(400).duration(600)} style={styles.card}>
        <Text style={styles.cardTitle}>🏭 Indústria e Agricultura</Text>
        <Text style={styles.text}>
          Usada para esterilizar equipamentos médicos, conservar alimentos, controlar pragas e em medidores de nível 
          e espessura em processos industriais.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(600).duration(600)} style={styles.cardIncident}>
        <Text style={styles.cardTitleIncident}>💣 Bomba de Hiroshima (1945)</Text>
        <Text style={styles.textIncident}>
          Um dos eventos mais trágicos da história, a bomba atômica lançada sobre Hiroshima demonstrou o poder 
          destrutivo da fissão nuclear, causando devastação e milhares de mortes imediatas e a longo prazo.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(800).duration(600)} style={styles.cardIncident}>
        <Text style={styles.cardTitleIncident}>☢️ Acidente de Goiânia (1987)</Text>
        <Text style={styles.textIncident}>
          Um dos maiores acidentes radiológicos do mundo, causado pelo descarte inadequado de uma cápsula de Césio-137. 
          Resultou em mortes, contaminação e a necessidade de uma vasta operação de descontaminação.
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
    borderLeftColor: '#22c55e',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardIncident: {
    backgroundColor: '#440000',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#ff0000',
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
  cardTitleIncident: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffcccc',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#e2e8f0',
    lineHeight: 24,
  },
  textIncident: {
    fontSize: 16,
    color: '#ffdddd',
    lineHeight: 24,
  },
});