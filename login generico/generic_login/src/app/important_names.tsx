import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ImportantNamesScreen() {
  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Animated.Text entering={FadeInDown.duration(500)} style={styles.title}>
        Nomes Importantes
      </Animated.Text>

      {/* Marie Curie */}
      <Animated.View entering={FadeInDown.delay(200).duration(600)} style={styles.card}>
        <View style={styles.headerCard}>
          <Image 
            source={require('../../assets/nomes/marie.jpg')} 
            style={styles.avatar} 
          />
          <Text style={styles.cardTitle}>Marie Curie</Text>
        </View>
        <Text style={styles.text}>
          Pioneira na pesquisa da radioatividade, a primeira mulher a ganhar um Prêmio Nobel e a única pessoa a ganhá-lo em duas áreas científicas diferentes (Física e Química). Descobriu o polônio e o rádio.
        </Text>
      </Animated.View>

      {/* Pierre Curie */}
      <Animated.View entering={FadeInDown.delay(300).duration(600)} style={styles.card}>
        <View style={styles.headerCard}>
          <Image 
            source={require('../../assets/nomes/pierre.jpg')} 
            style={styles.avatar} 
          />
          <Text style={styles.cardTitle}>Pierre Curie</Text>
        </View>
        <Text style={styles.text}>
          Pioneiro nos estudos de magnetismo, cristalografia e radioatividade. Compartilhou o Prêmio Nobel de Física em 1903 com Marie Curie e Henri Becquerel.
        </Text>
      </Animated.View>

      {/* Henri Becquerel */}
      <Animated.View entering={FadeInDown.delay(400).duration(600)} style={styles.card}>
        <View style={styles.headerCard}>
          <Image 
            source={require('../../assets/nomes/becquerel.jpg')} 
            style={styles.avatar} 
          />
          <Text style={styles.cardTitle}>Henri Becquerel</Text>
        </View>
        <Text style={styles.text}>
          Descobriu a radioatividade acidentalmente em 1896, ao observar a emissão espontânea de raios por sais de urânio. Compartilhou o Prêmio Nobel de Física com o casal Curie.
        </Text>
      </Animated.View>

      {/* Ernest Rutherford */}
      <Animated.View entering={FadeInDown.delay(500).duration(600)} style={styles.card}>
        <View style={styles.headerCard}>
          <Image 
            source={require('../../assets/nomes/ernest.jpg')} 
            style={styles.avatar} 
          />
          <Text style={styles.cardTitle}>Ernest Rutherford</Text>
        </View>
        <Text style={styles.text}>
          Conhecido como o "pai da física nuclear", formulou o modelo atômico com núcleo denso e diferenciou as radiações alfa e beta. Recebeu o Prêmio Nobel de Química em 1908.
        </Text>
      </Animated.View>

      {/* Lise Meitner */}
      <Animated.View entering={FadeInDown.delay(600).duration(600)} style={styles.card}>
        <View style={styles.headerCard}>
          <Image 
            source={require('../../assets/nomes/lise.jpg')} 
            style={styles.avatar} 
          />
          <Text style={styles.cardTitle}>Lise Meitner</Text>
        </View>
        <Text style={styles.text}>
          Física que desempenhou um papel fundamental na descoberta da fissão nuclear ao lado de Otto Hahn, fornecendo a explicação teórica para a divisão do átomo.
        </Text>
      </Animated.View>

      {/* Otto Hahn */}
      <Animated.View entering={FadeInDown.delay(700).duration(600)} style={styles.card}>
        <View style={styles.headerCard}>
          <Image 
            source={require('../../assets/nomes/otto.jpg')} 
            style={styles.avatar} 
          />
          <Text style={styles.cardTitle}>Otto Hahn</Text>
        </View>
        <Text style={styles.text}>
          Químico alemão considerado pioneiro da fissão nuclear. Conduziu os experimentos com urânio que comprovaram a fissão e recebeu o Prêmio Nobel de Química em 1944.
        </Text>
      </Animated.View>

      {/* Niels Bohr */}
      <Animated.View entering={FadeInDown.delay(800).duration(600)} style={styles.card}>
        <View style={styles.headerCard}>
          <Image 
            source={require('../../assets/nomes/niels.jpg')} 
            style={styles.avatar} 
          />
          <Text style={styles.cardTitle}>Niels Bohr</Text>
        </View>
        <Text style={styles.text}>
          Criador do modelo atômico de Bohr e peça-chave na mecânica quântica e física nuclear, propondo o modelo da gota líquida para o núcleo atômico. Prêmio Nobel de Física em 1922.
        </Text>
      </Animated.View>

      {/* Irène Joliot-Curie */}
      <Animated.View entering={FadeInDown.delay(900).duration(600)} style={styles.card}>
        <View style={styles.headerCard}>
          <Image 
            source={require('../../assets/nomes/irene.jpg')} 
            style={styles.avatar} 
          />
          <Text style={styles.cardTitle}>Irène Joliot-Curie</Text>
        </View>
        <Text style={styles.text}>
          Filha de Marie e Pierre Curie. Descobriu a radioatividade artificial junto com Frédéric Joliot-Curie, feito que lhe rendeu o Prêmio Nobel de Química em 1935.
        </Text>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#facc15',
    textAlign: 'center',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#0f172a',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#8b5cf6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#8b5cf6',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#facc15',
  },
  text: {
    fontSize: 16,
    color: '#e2e8f0',
    lineHeight: 24,
  },
});
