// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { useRouter } from "expo-router";
// import Animated, { FadeInRight } from "react-native-reanimated";

// export default function Home() {
//   const router = useRouter();
//   const menuItems = [
//     { title: "História da Radioatividade", route: "/history", color: "#a855f7" }, // Roxo
//     { title: "Fusão e Fissão Nuclear", route: "/fusion_fission", color: "#f97316" }, // Laranja
//     { title: "Fontes de Radiação", route: "/sources", color: "#22c55e" }, // Verde
//     { title: "Nomes Importantes", route: "/important_names", color: "#3b82f6" }, // Azul
//     { title: "Aplicações da Radiação", route: "/applications", color: "#ef4444" }, // Vermelho
//     // { title: "Quiz", route: "/quiz", color: "#eab308" }, // Amarelo - Futuro
//     // { title: "Simulação", route: "/simulation", color: "#6366f1" }, // Índigo - Futuro
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>☢️ Mundo Nuclear</Text>
//       {menuItems.map((item, index) => (
//         <Animated.View key={index} entering={FadeInRight.delay(index * 100).duration(500)}>
//           <TouchableOpacity 
//             style={[styles.card, { borderLeftColor: item.color }]} 
//             onPress={() => router.push(item.route as any)}
//           >
//             <Text style={styles.cardTitle}>{item.title}</Text>
//           </TouchableOpacity>
//         </Animated.View>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#020617",
//     padding: 20,
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 30,
//     color: "#facc15",
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 30,
//   },
//   card: {
//     backgroundColor: "#0f172a",
//     padding: 20,
//     borderRadius: 15,
//     marginBottom: 15,
//     borderLeftWidth: 6,
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   cardTitle: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });
import { View, Text, Pressable, Alert } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'expo-router';

export default function _Home() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      Alert.alert('Erro', 'Não foi possível sair');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Olá, {user?.first_name || user?.email}!
      </Text>
      <Text>Bem-vindo ao sistema.</Text>

    <Pressable 
      onPress={() => router.push('/profile')} 
      style={{ backgroundColor: '#007AFF', padding: 15, borderRadius: 8, marginTop: 20, width: '100%', alignItems: 'center' }}
>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>Editar Perfil</Text>
     </Pressable>

      <Pressable 
        onPress={handleLogout} 
        style={{ backgroundColor: 'red', padding: 15, borderRadius: 8, marginTop: 40, width: '100%', alignItems: 'center' }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Sair</Text>
      </Pressable>
    </View>
  );
}