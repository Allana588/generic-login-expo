import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function ResetConfirmScreen() {
  const [uid, setUid] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const router = useRouter();

  const handleConfirmReset = async () => {
    if (!uid || !token || !newPassword) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/auth/users/reset_password_confirm/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid: uid.trim(),
          token: token.trim(),
          new_password: newPassword,
          re_new_password: newPassword,
        }),
      });

      if (response.ok) {
        Alert.alert('Sucesso!', 'Senha alterada com sucesso.');
        // Redireciona de volta para a tela inicial / login
        router.replace('/');
      } else {
        Alert.alert('Erro', 'UID ou Token inválidos/expirados.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao se conectar com o servidor backend.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Nova Senha</Text>

      <TextInput
        style={styles.input}
        placeholder="Cole o UID do terminal"
        value={uid}
        onChangeText={setUid}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Cole o Token do terminal"
        value={token}
        onChangeText={setToken}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a Nova Senha"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleConfirmReset}>
        <Text style={styles.buttonText}>Redefinir Senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 15 },
  button: { backgroundColor: '#28a745', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

import { Link } from 'expo-router';

<Link href="/forgot-password" style={{ color: '#007AFF', marginTop: 15, textAlign: 'center' }}>
  Esqueci minha senha
</Link>