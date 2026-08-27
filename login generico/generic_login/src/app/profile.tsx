import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ActivityIndicator, 
  Alert 
} from 'react-native';
import { useRouter } from 'expo-router';
// Importe a sua instância configurada do Axios (ou ajuste o caminho conforme a estrutura da sua aplicação)
import { api } from '../services/api'; 

interface UserProfile {
  first_name: string;
  last_name: string;
  email?: string;
  [key: string]: any;
}

export default function ProfileScreen() {
  const router = useRouter();

  // Estados para armazenar os dados originais (vindos da API)
  const [initialFirstName, setInitialFirstName] = useState('');
  const [initialLastName, setInitialLastName] = useState('');

  // Estados dos inputs (formulário)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // 1. Carrega os dados atuais do usuário ao entrar na tela
  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      const response = await api.get<UserProfile>('/auth/users/me/');
      const data = response.data;

      // Define os valores atuais no formulário e no estado inicial
      setFirstName(data.first_name || '');
      setLastName(data.last_name || '');
      setInitialFirstName(data.first_name || '');
      setInitialLastName(data.last_name || '');
    } catch (error: any) {
      console.error('Erro ao buscar perfil:', error);
      Alert.alert('Erro', 'Não foi possível carregar os dados do perfil.');
    } finally {
      setLoading(false);
    }
  };

  // 2. Função para salvar as alterações
  const handleSave = async () => {
    // Monta o payload enviando APENAS os campos que foram alterados
    const payload: Partial<UserProfile> = {};

    if (firstName.trim() !== initialFirstName) {
      payload.first_name = firstName.trim();
    }

    if (lastName.trim() !== initialLastName) {
      payload.last_name = lastName.trim();
    }

    // Se nenhum campo mudou, cancela o envio
    if (Object.keys(payload).length === 0) {
      Alert.alert('Aviso', 'Nenhuma alteração foi realizada.');
      return;
    }

    try {
      setSaving(true);
      // Envia a requisição PATCH apenas com os campos modificados
      const response = await api.patch('/auth/users/me/', payload);

      // Atualiza o estado inicial para refletir as novas informações
      setInitialFirstName(response.data.first_name ?? firstName);
      setInitialLastName(response.data.last_name ?? lastName);

      Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
    } catch (error: any) {
      console.error('Erro ao atualizar perfil:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao salvar as alterações.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Carregando perfil...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Primeiro Nome (First Name)</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Digite seu primeiro nome"
          autoCapitalize="words"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Sobrenome (Last Name)</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Digite seu sobrenome"
          autoCapitalize="words"
        />
      </View>

      <TouchableOpacity 
        style={[styles.button, saving && styles.buttonDisabled]} 
        onPress={handleSave}
        disabled={saving}
      >
        {saving ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Salvar Alterações</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: '#666',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A4A4A',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonDisabled: {
    backgroundColor: '#A0C7FF',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});