import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>☢️ Mundo da Radioatividade</Text>

      <Text style={styles.subtitle}>
        Entenda o que é radioatividade, como funciona e onde ela está presente no dia a dia.
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => router.push("/home")}
      >
        <Text style={styles.buttonText}>Explorar</Text>
      </TouchableOpacity>

      <View style={styles.infoBox}>
        <Text style={styles.curiosity}>
          💡 A radiação está presente naturalmente no ambiente!
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  title: {
    fontSize: 32,
    color: "#facc15",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    letterSpacing: 1,
  },

  subtitle: {
    fontSize: 16,
    color: "#e5e7eb",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 22,
  },

  button: {
    backgroundColor: "#facc15",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,

    shadowColor: "#facc15",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },

  buttonText: {
    color: "#020617",
    fontWeight: "700",
    fontSize: 16,
  },

  infoBox: {
    marginTop: 30,
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#022c22",
    borderWidth: 1,
    borderColor: "#065f46",
  },

  curiosity: {
    color: "#4ade80",
    fontSize: 14,
    textAlign: "center",
  },
});