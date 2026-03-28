import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🏡</Text>
      <Text style={styles.title}>RealQuiz</Text>
      <Text style={styles.subtitle}>
        Master your market.{'\n'}One question at a time.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/quiz')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: '#a0a0b0',
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 28,
  },
  button: {
    backgroundColor: '#4f8ef7',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: '#4f8ef7',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#4f8ef7',
    fontSize: 18,
    fontWeight: 'bold',
  },
});