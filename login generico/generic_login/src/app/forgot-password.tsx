import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, digite seu e-mail.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/auth/users/reset_password/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Verifique o terminal do seu backend para pegar o UID e Token.');
        // Redireciona para a tela de confirmação
        router.push('/reset-confirm');
      } else {
        Alert.alert('Erro', 'Não foi possível solicitar a redefinição. Verifique o e-mail digitado.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao se conectar com o servidor backend.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueci minha senha</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Enviar E-mail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 15 },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
