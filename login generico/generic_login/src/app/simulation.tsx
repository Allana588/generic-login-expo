import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withRepeat, 
  withSequence,
  Easing
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const SIMULATION_SIZE = Math.min(width * 0.85, 320);

export default function SimulationScreen() {
  const [scenario, setScenario] = useState<'none' | 'hiroshima' | 'goiania'>('none');
  const pulse = useSharedValue(1);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);

  const startSimulation = (type: 'hiroshima' | 'goiania') => {
    setScenario(type);
    
    // Reset e início das animações
    scale.value = 0;
    opacity.value = 0.85;
    
    // Animação de pulsação constante
    pulse.value = withRepeat(
      withSequence(
        withTiming(1.15, { duration: 900, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }),
        withTiming(1, { duration: 900, easing: Easing.bezier(0.25, 0.1, 0.25, 1) })
      ),
      -1,
      true
    );

    // Expansão do raio de radiação
    const finalScale = type === 'hiroshima' ? 3.0 : 1.7;
    scale.value = withTiming(finalScale, { duration: 2200 });
  };

  const resetSimulation = () => {
    setScenario('none');
    scale.value = 0;
    opacity.value = 0;
  };

  const animatedCircle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value * pulse.value }],
      opacity: opacity.value,
      backgroundColor: scenario === 'hiroshima' ? 'rgba(239, 68, 68, 0.45)' : 'rgba(34, 197, 94, 0.45)',
      borderColor: scenario === 'hiroshima' ? '#ef4444' : '#22c55e',
    };
  });

  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Simulador de Dispersão ☢️</Text>
      <Text style={styles.subtitle}>
        Compare o alcance e a natureza da dispersão em dois grandes marcos históricos.
      </Text>
      
      <View style={styles.simulationArea}>
        {/* Ponto Central do Incidente */}
        <View style={styles.cityPoint}>
          <Text style={styles.cityPointLabel}>Epicentro</Text>
        </View>
        
        {/* Círculo de Radiação Animado */}
        {scenario !== 'none' && (
          <Animated.View style={[styles.radiationCircle, animatedCircle]} />
        )}
      </View>

      <View style={styles.controls}>
        <Text style={styles.label}>Selecione um cenário para simular:</Text>
        
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#ef4444' }]} 
          activeOpacity={0.8}
          onPress={() => startSimulation('hiroshima')}
        >
          <Text style={styles.buttonText}>💣 Bomba de Hiroshima (Fissão em Massa)</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#10b981' }]} 
          activeOpacity={0.8}
          onPress={() => startSimulation('goiania')}
        >
          <Text style={styles.buttonText}>☢️ Césio-137 (Contaminação Urbana)</Text>
        </TouchableOpacity>

        {scenario !== 'none' && (
          <TouchableOpacity 
            style={styles.resetButton} 
            onPress={resetSimulation}
          >
            <Text style={styles.resetText}>Limpar Simulação</Text>
          </TouchableOpacity>
        )}
      </View>

      {scenario !== 'none' && (
        <View style={[styles.infoBox, scenario === 'hiroshima' ? styles.infoHiroshima : styles.infoGoiania]}>
          <Text style={styles.infoTitle}>
            {scenario === 'hiroshima' ? '⚠️ ONDA DE CHOQUE & RADIAÇÃO IMEDIATA' : '☢️ DISPERSÃO POR CONTATO FÍSICO'}
          </Text>
          <Text style={styles.infoText}>
            {scenario === 'hiroshima' 
              ? 'Em uma explosão de fissão atmosférica, a energia se propaga em fração de segundos. Raios gama de alta energia e onda térmica cobrem quilômetros de raio instantaneamente.' 
              : 'No acidente radiológico de Goiânia, a dispersão não foi por onda explosiva, mas sim por manuseio, transporte do pó brilhante e contaminação cruzada de pessoas, roupas e animais.'}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#020617',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#facc15', 
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
    maxWidth: 320,
  },
  simulationArea: {
    width: SIMULATION_SIZE,
    height: SIMULATION_SIZE,
    backgroundColor: '#0f172a',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#1e293b',
    marginVertical: 12,
  },
  cityPoint: { 
    width: 14, 
    height: 14, 
    backgroundColor: '#facc15', 
    borderRadius: 7, 
    zIndex: 10, 
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityPointLabel: {
    position: 'absolute',
    top: 16,
    color: '#94a3b8',
    fontSize: 10,
    fontWeight: 'bold',
    width: 70,
    textAlign: 'center',
  },
  radiationCircle: { 
    position: 'absolute', 
    width: 90, 
    height: 90, 
    borderRadius: 45,
    borderWidth: 2,
  },
  controls: { 
    width: '100%', 
    maxWidth: 340,
    marginTop: 10,
  },
  label: { 
    color: '#cbd5e1', 
    marginBottom: 12, 
    textAlign: 'center', 
    fontSize: 15,
    fontWeight: '600',
  },
  button: { 
    padding: 15, 
    borderRadius: 12, 
    marginBottom: 10, 
    alignItems: 'center', 
    elevation: 3,
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 15,
  },
  resetButton: { 
    padding: 10, 
    alignItems: 'center',
    marginTop: 4,
  },
  resetText: { 
    color: '#94a3b8', 
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  infoBox: { 
    marginTop: 15, 
    padding: 18, 
    borderRadius: 14, 
    width: '100%', 
    maxWidth: 340,
    borderLeftWidth: 4, 
  },
  infoHiroshima: {
    backgroundColor: '#1f1315',
    borderLeftColor: '#ef4444',
  },
  infoGoiania: {
    backgroundColor: '#0c1f17',
    borderLeftColor: '#10b981',
  },
  infoTitle: { 
    color: '#facc15', 
    fontWeight: 'bold', 
    marginBottom: 6, 
    fontSize: 13,
    letterSpacing: 0.5,
  },
  infoText: { 
    color: '#e2e8f0', 
    fontSize: 13, 
    lineHeight: 20,
  },
});
