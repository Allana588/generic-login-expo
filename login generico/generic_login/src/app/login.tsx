import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    // Aqui você implementaria a lógica de autenticação real.
    // Por enquanto, apenas simula um login bem-sucedido.
    Alert.alert('Sucesso', 'Login realizado com sucesso!', [
      { text: 'OK', onPress: () => router.replace('/home') },
    ]);
  };

  return (
    <View style={styles.container}>
      <Animated.Text entering={FadeInUp.duration(800)} style={styles.title}>Bem-vindo!</Animated.Text>
      <Animated.Text entering={FadeInUp.delay(200).duration(800)} style={styles.subtitle}>Aprenda sobre Radioatividade</Animated.Text>

      <Animated.View entering={FadeInDown.delay(400).duration(800)} style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor="#9ca3af"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#9ca3af"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#facc15',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#cbd5f5',
    marginBottom: 40,
  },
  formContainer: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: '#0f172a',
    borderRadius: 15,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  input: {
    backgroundColor: '#1e293b',
    color: '#e2e8f0',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  button: {
    backgroundColor: '#facc15',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#020617',
    fontSize: 18,
    fontWeight: 'bold',
  },
});