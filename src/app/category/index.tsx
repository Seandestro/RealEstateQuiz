import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const CATEGORY_META: Record<string, { label: string; emoji: string; accent: string; bg: string; description: string }> = {
  market:         { label: 'Market',        emoji: '📊', accent: '#4f8ef7', bg: '#1e3a5a', description: 'Prices, trends & market data' },
  neighborhoods:  { label: 'Neighborhoods', emoji: '🏘️', accent: '#4caf50', bg: '#1e3a2e', description: 'Local areas & lifestyle' },
  schools:        { label: 'Schools',       emoji: '🎓', accent: '#ff9800', bg: '#3a2e1e', description: 'Districts, ratings & enrollment' },
  churches:       { label: 'Churches',      emoji: '⛪', accent: '#9c27b0', bg: '#2e1e3a', description: 'Places of worship & community' },
  entertainment:  { label: 'Entertainment', emoji: '🎭', accent: '#e91e63', bg: '#3a1e2e', description: 'Fun, events & nightlife' },
  shopping:       { label: 'Shopping',      emoji: '🛍️', accent: '#00bcd4', bg: '#1e2e3a', description: 'Retail, malls & boutiques' },
  restaurants:    { label: 'Restaurants',   emoji: '🍽️', accent: '#ff5722', bg: '#3a2a1e', description: 'Dining, cafes & nightlife' },
  parks:          { label: 'Parks',         emoji: '🌳', accent: '#8bc34a', bg: '#1e3a28', description: 'Outdoors & recreation' },
  healthcare:     { label: 'Healthcare',    emoji: '🏥', accent: '#26c6da', bg: '#1e3535', description: 'Hospitals, clinics & wellness' },
  transportation: { label: 'Transportation',emoji: '🚗', accent: '#ffc107', bg: '#2a2a1e', description: 'Commutes, transit & access' },
};

export default function CategoryScreen() {
  const router = useRouter();
  const { category = 'market', state, county, city } = useLocalSearchParams<{
    category: string; state: string; county: string; city: string;
  }>();

  const meta = CATEGORY_META[category] ?? CATEGORY_META['market'];
  const locationLabel = [city, county, state].filter(Boolean).join(', ');

  function goQuickRead() {
    router.push({ pathname: '/quickread', params: { category, state, county, city } });
  }

  function goQuiz() {
    router.push({ pathname: '/quiz', params: { category, state, county, city } });
  }

  return (
    <View style={styles.container}>
      {/* Back */}
      <Pressable onPress={() => router.back()} style={styles.backBtn}>
        <Text style={styles.backText}>← Back to Menu</Text>
      </Pressable>

      {/* Hero */}
      <View style={[styles.hero, { backgroundColor: meta.bg, borderColor: meta.accent + '44' }]}>
        <Text style={styles.heroEmoji}>{meta.emoji}</Text>
        <Text style={[styles.heroTitle, { color: meta.accent }]}>{meta.label}</Text>
        <Text style={styles.heroDesc}>{meta.description}</Text>
        {locationLabel ? (
          <View style={styles.locationBadge}>
            <Text style={styles.locationPin}>📍</Text>
            <Text style={styles.locationText}>{locationLabel}</Text>
          </View>
        ) : null}
      </View>

      {/* Options */}
      <Text style={styles.sectionTitle}>Choose your mode</Text>

      {/* Quick Read card */}
      <Pressable style={[styles.optionCard, { borderColor: meta.accent + '55' }]} onPress={goQuickRead}>
        <View style={[styles.optionIcon, { backgroundColor: meta.accent + '22' }]}>
          <Text style={styles.optionEmoji}>📖</Text>
        </View>
        <View style={styles.optionText}>
          <Text style={styles.optionTitle}>Quick Read</Text>
          <Text style={styles.optionSubtitle}>Key facts, insights & what agents need to know</Text>
        </View>
        <Text style={[styles.optionArrow, { color: meta.accent }]}>→</Text>
      </Pressable>

      {/* Quiz card */}
      <Pressable style={[styles.optionCard, { borderColor: meta.accent + '55' }]} onPress={goQuiz}>
        <View style={[styles.optionIcon, { backgroundColor: meta.accent + '22' }]}>
          <Text style={styles.optionEmoji}>🧠</Text>
        </View>
        <View style={styles.optionText}>
          <Text style={styles.optionTitle}>Take the Quiz</Text>
          <Text style={styles.optionSubtitle}>Test your knowledge with 5 questions</Text>
        </View>
        <Text style={[styles.optionArrow, { color: meta.accent }]}>→</Text>
      </Pressable>

      {/* Pro tip */}
      <View style={styles.tipBox}>
        <Text style={styles.tipIcon}>💡</Text>
        <Text style={styles.tipText}>
          Start with the Quick Read to brush up, then challenge yourself with the quiz.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f1e', padding: 24, paddingTop: 56 },
  backBtn: { marginBottom: 24 },
  backText: { color: '#4f8ef7', fontSize: 15, fontWeight: '600' },

  hero: { borderRadius: 20, padding: 24, alignItems: 'center', marginBottom: 32, borderWidth: 1 },
  heroEmoji: { fontSize: 52, marginBottom: 10 },
  heroTitle: { fontSize: 28, fontWeight: 'bold', marginBottom: 4 },
  heroDesc: { color: '#7070a0', fontSize: 14, marginBottom: 12 },
  locationBadge: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: 'rgba(0,0,0,0.3)', paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20 },
  locationPin: { fontSize: 13 },
  locationText: { color: '#a0a0c0', fontSize: 12, fontWeight: '600' },

  sectionTitle: { color: '#555577', fontSize: 12, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12 },

  optionCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1a1a2e', borderRadius: 16, padding: 16, marginBottom: 12, borderWidth: 1.5, gap: 14 },
  optionIcon: { width: 52, height: 52, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  optionEmoji: { fontSize: 26 },
  optionText: { flex: 1 },
  optionTitle: { color: '#ffffff', fontSize: 17, fontWeight: 'bold', marginBottom: 3 },
  optionSubtitle: { color: '#7070a0', fontSize: 13, lineHeight: 18 },
  optionArrow: { fontSize: 20, fontWeight: 'bold' },

  tipBox: { flexDirection: 'row', gap: 10, backgroundColor: '#1a1a2e', borderRadius: 12, padding: 14, marginTop: 8, alignItems: 'flex-start' },
  tipIcon: { fontSize: 18 },
  tipText: { color: '#7070a0', fontSize: 13, lineHeight: 20, flex: 1 },
});
