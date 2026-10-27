import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ApplicationsScreen() {
  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Animated.Text entering={FadeInDown.duration(400)} style={styles.title}>
        Aplicações e Incidentes
      </Animated.Text>
      <Animated.Text entering={FadeInDown.delay(100).duration(400)} style={styles.subtitle}>
        A tecnologia nuclear possui usos benéficos vitais, mas exige extremo rigor e responsabilidade.
      </Animated.Text>

      {/* Seção Aplicações */}
      <Text style={styles.sectionHeader}>🔬 USOS BENÉFICOS</Text>

      <Animated.View entering={FadeInDown.delay(200).duration(600)} style={styles.card}>
        <Text style={styles.cardTitle}>🏥 Medicina Nuclear e Saúde</Text>
        <Text style={styles.text}>
          A radiação é essencial tanto em diagnósticos por imagem (raio-X, tomografia computadorizada, PET scan com flúor-18) quanto no combate ao câncer por meio de radioterapia direcionada, destruindo tumores e salvando vidas.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(350).duration(600)} style={styles.card}>
        <Text style={styles.cardTitle}>🏭 Indústria e Agropecuária</Text>
        <Text style={styles.text}>
          Usada na esterilização a frio de seringas e instrumentos cirúrgicos, na irradiação de alimentos para eliminar bactérias e aumentar a vida útil de grãos, e em gamagrafia industrial para inspecionar soldas em aeronaves e oleodutos.
        </Text>
      </Animated.View>

      {/* Seção Incidentes */}
      <Text style={[styles.sectionHeader, { color: '#f87171', marginTop: 15 }]}>⚠️ GRANDES EVENTOS HISTÓRICOS</Text>

      <Animated.View entering={FadeInDown.delay(500).duration(600)} style={styles.cardIncident}>
        <View style={styles.incidentTag}>
          <Text style={styles.incidentTagText}>1945 • SEGUNDA GUERRA</Text>
        </View>
        <Text style={styles.cardTitleIncident}>💣 Bomba de Hiroshima</Text>
        <Text style={styles.textIncident}>
          O primeiro uso de uma arma nuclear em guerra evidenciou a capacidade destrutiva da fissão descontrolada do Urânio-235. A liberação violenta de energia mecânica, térmica e radiação imediata causou devastação massiva e impactos biológicos prolongados.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(650).duration(600)} style={styles.cardIncident}>
        <View style={styles.incidentTag}>
          <Text style={styles.incidentTagText}>1987 • BRASIL</Text>
        </View>
        <Text style={styles.cardTitleIncident}>☢️ Acidente de Goiânia (Césio-137)</Text>
        <Text style={styles.textIncident}>
          O maior acidente radiológico em área urbana do mundo, originado pelo abandono de um aparelho de radioterapia desativado. O pó luminescente azul de cloreto de césio-137 contaminou centenas de pessoas, gerando 6 mil toneladas de rejeitos radioativos.
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
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: '#4ade80',
    marginBottom: 10,
    marginLeft: 4,
  },
  card: {
    backgroundColor: '#0f172a',
    padding: 20,
    borderRadius: 16,
    marginBottom: 14,
    borderLeftWidth: 5,
    borderLeftColor: '#22c55e',
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
  cardIncident: {
    backgroundColor: '#1a0d0d',
    padding: 20,
    borderRadius: 16,
    marginBottom: 14,
    borderLeftWidth: 5,
    borderLeftColor: '#ef4444',
    borderWidth: 1,
    borderRightColor: '#3b1212',
    borderTopColor: '#3b1212',
    borderBottomColor: '#3b1212',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  incidentTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#450a0a',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginBottom: 8,
  },
  incidentTagText: {
    color: '#fca5a5',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#facc15',
    marginBottom: 8,
  },
  cardTitleIncident: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fca5a5',
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    color: '#e2e8f0',
    lineHeight: 23,
  },
  textIncident: {
    fontSize: 15,
    color: '#fecaca',
    lineHeight: 23,
  },
});
