import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const router = useRouter();

  function handleSubmit() {
    router.push('/location');
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoEmoji}>🏡</Text>
          </View>
          <Text style={styles.appName}>RealQuiz</Text>
          <Text style={styles.tagline}>
            {isLogin ? 'Welcome back.' : 'Start your journey.'}
          </Text>
        </View>

        {/* Tab switcher */}
        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tab, isLogin && styles.tabActive]}
            onPress={() => setIsLogin(true)}
          >
            <Text style={[styles.tabText, isLogin && styles.tabTextActive]}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, !isLogin && styles.tabActive]}
            onPress={() => setIsLogin(false)}
          >
            <Text style={[styles.tabText, !isLogin && styles.tabTextActive]}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {!isLogin && (
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Jane Smith"
                placeholderTextColor="#555577"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
              />
            </View>
          )}

          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="you@example.com"
              placeholderTextColor="#555577"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#555577"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          {isLogin && (
            <TouchableOpacity style={styles.forgotRow}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>
              {isLogin ? 'Log In' : 'Create Account'}
            </Text>
          </TouchableOpacity>

          <View style={styles.dividerRow}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={styles.divider} />
          </View>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButton} onPress={handleSubmit}>
              <Text style={styles.socialText}>G  Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={handleSubmit}>
              <Text style={styles.socialText}>  Apple</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Guest option */}
        <TouchableOpacity style={styles.guestRow} onPress={() => router.push('/location')}>
          <Text style={styles.guestText}>Continue as guest</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#0f0f1e',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#0f0f1e',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1e1e3a',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#3a3a5a',
  },
  logoEmoji: {
    fontSize: 38,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 15,
    color: '#7070a0',
    marginTop: 4,
  },
  tabRow: {
    flexDirection: 'row',
    backgroundColor: '#1a1a2e',
    borderRadius: 14,
    padding: 4,
    width: '100%',
    marginBottom: 28,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: '#4f8ef7',
  },
  tabText: {
    color: '#7070a0',
    fontWeight: '600',
    fontSize: 15,
  },
  tabTextActive: {
    color: '#ffffff',
  },
  form: {
    width: '100%',
  },
  inputWrapper: {
    marginBottom: 16,
  },
  inputLabel: {
    color: '#a0a0c0',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: '#1a1a2e',
    color: '#ffffff',
    width: '100%',
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1.5,
    borderColor: '#2a2a4a',
  },
  forgotRow: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginTop: -4,
  },
  forgotText: {
    color: '#4f8ef7',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#4f8ef7',
    paddingVertical: 16,
    borderRadius: 14,
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#4f8ef7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
    gap: 12,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#2a2a4a',
  },
  dividerText: {
    color: '#555577',
    fontSize: 13,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 12,
  },
  socialButton: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    borderWidth: 1.5,
    borderColor: '#2a2a4a',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  socialText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  guestRow: {
    marginTop: 28,
  },
  guestText: {
    color: '#555577',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
