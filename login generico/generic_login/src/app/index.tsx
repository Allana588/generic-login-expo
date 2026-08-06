// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { useRouter } from "expo-router";

// export default function Index() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>

//       <Text style={styles.title}>☢️ Mundo da Radioatividade</Text>

//       <Text style={styles.subtitle}>
//         Entenda o que é radioatividade, como funciona e onde ela está presente no dia a dia.
//       </Text>

//       <TouchableOpacity
//         style={styles.button}
//         activeOpacity={0.8}
//         onPress={() => router.push("/home")}
//       >
//         <Text style={styles.buttonText}>Explorar</Text>
//       </TouchableOpacity>

//       <View style={styles.infoBox}>
//         <Text style={styles.curiosity}>
//           💡 A radiação está presente naturalmente no ambiente!
//         </Text>
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#020617",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 24,
//   },

//   title: {
//     fontSize: 32,
//     color: "#facc15",
//     fontWeight: "700",
//     textAlign: "center",
//     marginBottom: 20,
//     letterSpacing: 1,
//   },

//   subtitle: {
//     fontSize: 16,
//     color: "#e5e7eb",
//     textAlign: "center",
//     marginBottom: 40,
//     lineHeight: 22,
//   },

//   button: {
//     backgroundColor: "#facc15",
//     paddingVertical: 14,
//     paddingHorizontal: 40,
//     borderRadius: 12,

//     shadowColor: "#facc15",
//     shadowOpacity: 0.4,
//     shadowRadius: 10,
//     elevation: 6,
//   },

//   buttonText: {
//     color: "#020617",
//     fontWeight: "700",
//     fontSize: 16,
//   },

//   infoBox: {
//     marginTop: 30,
//     padding: 15,
//     borderRadius: 12,
//     backgroundColor: "#022c22",
//     borderWidth: 1,
//     borderColor: "#065f46",
//   },

//   curiosity: {
//     color: "#4ade80",
//     fontSize: 14,
//     textAlign: "center",
//   },
// });
import { useState } from 'react';
import { View, Text, Pressable, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { Redirect } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';
import MeuInput from './components/input'; // Seu input customizado

export default function Index() {
  const { user, login, isLoading: isAuthLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Tela de Loading
  if (isAuthLoading) return <ActivityIndicator size="large" color="#0000ff" />;

  // 2. Se já logou, manda pra Home (Bug fix: navegação declarativa)
  if (user) return <Redirect href="/home" />;

  // 3. Tela de Login
  const handleLogin = async () => {
    if (!email || !password) return Alert.alert('Erro', 'Preencha todos os campos');
    setIsSubmitting(true);
    try {
      await login({ email, password });
    } catch (error: any) {
      // Tratamento de erro genérico do Axios
      const msg = error?.response?.data?.detail || 'Email ou senha incorretos';
      Alert.alert('Erro no login', msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20 }}>
      <MeuInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <MeuInput placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
      
      <Pressable onPress={handleLogin} disabled={isSubmitting} style={{ backgroundColor: 'blue', padding: 15, borderRadius: 8, marginTop: 20, alignItems: 'center' }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          {isSubmitting ? 'Entrando...' : 'Login'}
        </Text>
      </Pressable>
    </ScrollView>
  );
}