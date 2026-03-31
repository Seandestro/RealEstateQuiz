import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ALL_QUICKREADS } from '../../data/quickreads';

const CATEGORY_META: Record<string, { label: string; emoji: string; accent: string }> = {
  market:         { label: 'Market',        emoji: '📊', accent: '#4f8ef7' },
  neighborhoods:  { label: 'Neighborhoods', emoji: '🏘️', accent: '#4caf50' },
  schools:        { label: 'Schools',       emoji: '🎓', accent: '#ff9800' },
  churches:       { label: 'Churches',      emoji: '⛪', accent: '#9c27b0' },
  entertainment:  { label: 'Entertainment', emoji: '🎭', accent: '#e91e63' },
  shopping:       { label: 'Shopping',      emoji: '🛍️', accent: '#00bcd4' },
  restaurants:    { label: 'Restaurants',   emoji: '🍽️', accent: '#ff5722' },
  parks:          { label: 'Parks',         emoji: '🌳', accent: '#8bc34a' },
  healthcare:     { label: 'Healthcare',    emoji: '🏥', accent: '#26c6da' },
  transportation: { label: 'Transportation',emoji: '🚗', accent: '#ffc107' },
};

export default function QuickReadScreen() {
  const router = useRouter();
  const { category = 'market', state, county, city } = useLocalSearchParams<{
    category: string; state: string; county: string; city: string;
  }>();

  const meta = CATEGORY_META[category] ?? CATEGORY_META['market'];
  const data = ALL_QUICKREADS[category] ?? ALL_QUICKREADS['market'];
  const locationLabel = [city, county, state].filter(Boolean).join(', ');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>
        <View style={[styles.badge, { backgroundColor: meta.accent + '22', borderColor: meta.accent + '55' }]}>
          <Text style={styles.badgeEmoji}>{meta.emoji}</Text>
          <Text style={[styles.badgeLabel, { color: meta.accent }]}>{meta.label}</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Title */}
        <Text style={styles.title}>{meta.label} Quick Read</Text>
        {locationLabel ? <Text style={styles.location}>📍 {locationLabel}</Text> : null}
        <Text style={styles.intro}>{data.intro}</Text>

        {/* Sections */}
        {data.sections.map((section) => (
          <View key={section.id} style={[styles.card, { borderLeftColor: meta.accent }]}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardIcon}>{section.icon}</Text>
              <Text style={styles.cardTitle}>{section.title}</Text>
            </View>
            {section.bullets.map((bullet, i) => (
              <View key={i} style={styles.bulletRow}>
                <Text style={[styles.bulletDot, { color: meta.accent }]}>•</Text>
                <Text style={styles.bulletText}>{bullet}</Text>
              </View>
            ))}
            {section.tip ? (
              <View style={styles.tipRow}>
                <Text style={styles.tipIcon}>💡</Text>
                <Text style={styles.tipText}>{section.tip}</Text>
              </View>
            ) : null}
          </View>
        ))}

        {/* CTA to quiz */}
        <Pressable
          style={[styles.quizBtn, { backgroundColor: meta.accent }]}
          onPress={() => router.replace({ pathname: '/quiz', params: { category, state, county, city } })}
        >
          <Text style={styles.quizBtnText}>Ready? Take the Quiz →</Text>
        </Pressable>

        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f1e' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, paddingTop: 56, paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: '#1a1a2e' },
  backBtn: {},
  backText: { color: '#4f8ef7', fontSize: 15, fontWeight: '600' },
  badge: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, borderWidth: 1 },
  badgeEmoji: { fontSize: 15 },
  badgeLabel: { fontSize: 13, fontWeight: '700' },

  scroll: { padding: 24 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#ffffff', marginBottom: 4 },
  location: { color: '#555577', fontSize: 13, marginBottom: 12 },
  intro: { color: '#a0a0c0', fontSize: 15, lineHeight: 24, marginBottom: 24 },

  card: { backgroundColor: '#1a1a2e', borderRadius: 16, padding: 16, marginBottom: 16, borderLeftWidth: 3 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 12 },
  cardIcon: { fontSize: 22 },
  cardTitle: { color: '#ffffff', fontSize: 16, fontWeight: 'bold', flex: 1 },

  bulletRow: { flexDirection: 'row', gap: 8, marginBottom: 8, alignItems: 'flex-start' },
  bulletDot: { fontSize: 16, lineHeight: 22, marginTop: 1 },
  bulletText: { color: '#c0c0d8', fontSize: 14, lineHeight: 22, flex: 1 },

  tipRow: { flexDirection: 'row', gap: 8, marginTop: 8, paddingTop: 10, borderTopWidth: 1, borderTopColor: '#2a2a4a', alignItems: 'flex-start' },
  tipIcon: { fontSize: 15 },
  tipText: { color: '#7070a0', fontSize: 13, lineHeight: 19, flex: 1, fontStyle: 'italic' },

  quizBtn: { borderRadius: 14, paddingVertical: 16, alignItems: 'center', marginTop: 8 },
  quizBtnText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
});
