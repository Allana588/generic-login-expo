import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>☢️ Tipos de Radiação</Text>

     
      <TouchableOpacity 
        style={[styles.card, styles.alpha]}
        activeOpacity={0.8}
        onPress={() => router.push("/details")}
      >
        <Text style={styles.cardTitle}>Radiação Alfa (α)</Text>
        <Text style={styles.text}>Baixa penetração</Text>
      </TouchableOpacity>

     
      <TouchableOpacity 
        style={[styles.card, styles.beta]}
        activeOpacity={0.8}
        onPress={() => router.push("/details")}
      >
        <Text style={styles.cardTitle}>Radiação Beta (β)</Text>
        <Text style={styles.text}>Penetração média</Text>
      </TouchableOpacity>

      
      <TouchableOpacity 
        style={[styles.card, styles.gamma]}
        activeOpacity={0.8}
        onPress={() => router.push("/details")}
      >
        <Text style={styles.cardTitle}>Radiação Gama (γ)</Text>
        <Text style={styles.text}>Alta energia</Text>
      </TouchableOpacity>


      <TouchableOpacity 
        style={[styles.card, styles.sources]}
        activeOpacity={0.8}
        onPress={() => router.push("/sources" as any)}
      >
        <Text style={styles.cardTitle}>Fontes de Radiação</Text>
        <Text style={styles.text}>Onde a radiação é encontrada</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.card, styles.applications]}
        activeOpacity={0.8}
        onPress={() => router.push("/applications" as any)}
      >
        <Text style={styles.cardTitle}>Aplicações da Radiação</Text>
        <Text style={styles.text}>Usos benéficos da radiação</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    color: "#facc15",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
    letterSpacing: 1,
  },
  card: {
    backgroundColor: "#0f172a",
    padding: 20,
    borderRadius: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#1e293b",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  alpha: {
    borderLeftWidth: 5,
    borderLeftColor: "#22c55e",
  },
  beta: {
    borderLeftWidth: 5,
    borderLeftColor: "#3b82f6",
  },
  gamma: {
    borderLeftWidth: 5,
    borderLeftColor: "#ef4444",
  },
  
  sources: {
    borderLeftWidth: 5,
    borderLeftColor: "#f97316", // Laranja
  },
  applications: {
    borderLeftWidth: 5,
    borderLeftColor: "#8b5cf6", // Roxo
  },
  cardTitle: {
    color: "#facc15",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  text: {
    color: "#cbd5f5",
    fontSize: 14,
  },
});
