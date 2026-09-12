import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withRepeat, 
  withSequence,
  Easing
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export default function SimulationScreen() {
  const [scenario, setScenario] = useState('none');
  const pulse = useSharedValue(1);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);

  const startSimulation = (type: 'hiroshima' | 'goiania') => {
    setScenario(type);
    
    // Reset e início das animações
    scale.value = 0;
    opacity.value = 0.8;
    
    // Animação de pulsação constante
    pulse.value = withRepeat(
      withSequence(
        withTiming(1.2, { duration: 1000, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }),
        withTiming(1, { duration: 1000, easing: Easing.bezier(0.25, 0.1, 0.25, 1) })
      ),
      -1,
      true
    );

    // Expansão do raio de radiação
    const finalScale = type === 'hiroshima' ? 3.5 : 1.8;
    scale.value = withTiming(finalScale, { duration: 2500 });
  };

  const animatedCircle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value * pulse.value }],
      opacity: opacity.value,
      backgroundColor: scenario === 'hiroshima' ? 'rgba(255, 69, 0, 0.5)' : 'rgba(50, 205, 50, 0.5)',
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador de Dispersão ☢️</Text>
      
      <View style={styles.simulationArea}>
        {/* Ponto Central do Incidente */}
        <View style={styles.cityPoint} />
        
        {/* Círculo de Radiação Animado */}
        {scenario !== 'none' && (
          <Animated.View style={[styles.radiationCircle, animatedCircle]} />
        )}
      </View>

      <View style={styles.controls}>
        <Text style={styles.label}>Selecione um Cenário para Simular:</Text>
        
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#ef4444' }]} 
          onPress={() => startSimulation('hiroshima')}
        >
          <Text style={styles.buttonText}>Bomba de Hiroshima (Fissão)</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#22c55e' }]} 
          onPress={() => startSimulation('goiania')}
        >
          <Text style={styles.buttonText}>Césio-137 (Contaminação Urbana)</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.resetButton} 
          onPress={() => { setScenario('none'); scale.value = 0; opacity.value = 0; }}
        >
          <Text style={styles.resetText}>Limpar Simulação</Text>
        </TouchableOpacity>
      </View>

      {scenario !== 'none' && (
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>
            {scenario === 'hiroshima' ? '⚠️ IMPACTO TÉRMICO E RADIOLÓGICO' : '☢️ DISPERSÃO POR CONTATO'}
          </Text>
          <Text style={styles.infoText}>
            {scenario === 'hiroshima' 
              ? 'Simulação de uma explosão nuclear. O raio de destruição se expande em segundos, atingindo quilômetros de distância com radiação gama e calor intenso.' 
              : 'Simulação de um acidente radiológico. A contaminação se espalha pelo contato direto e manuseio de materiais, como ocorreu com o brilho azul do Césio-137.'}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617', padding: 20, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#facc15', marginTop: 10, marginBottom: 10 },
  simulationArea: {
    width: width * 0.85,
    height: width * 0.85,
    backgroundColor: '#0f172a',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#1e293b',
    marginVertical: 15,
  },
  cityPoint: { width: 12, height: 12, backgroundColor: '#fff', borderRadius: 6, zIndex: 10, elevation: 5 },
  radiationCircle: { position: 'absolute', width: 100, height: 100, borderRadius: 50 },
  controls: { width: '100%', paddingHorizontal: 10 },
  label: { color: '#cbd5f5', marginBottom: 12, textAlign: 'center', fontSize: 16 },
  button: { padding: 16, borderRadius: 12, marginBottom: 12, alignItems: 'center', elevation: 3 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  resetButton: { padding: 10, alignItems: 'center' },
  resetText: { color: '#9ca3af', textDecorationLine: 'underline' },
  infoBox: { marginTop: 15, padding: 15, backgroundColor: '#1e293b', borderRadius: 12, width: '100%', borderLeftWidth: 4, borderLeftColor: '#facc15' },
  infoTitle: { color: '#facc15', fontWeight: 'bold', marginBottom: 5, fontSize: 14 },
  infoText: { color: '#e2e8f0', fontSize: 13, lineHeight: 18 },
});
