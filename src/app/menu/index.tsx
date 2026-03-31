import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');
const CARD_SIZE = (width - 24 * 2 - 12) / 2;

const CATEGORIES = [
  {
    id: 'market',
    label: 'Market',
    emoji: '📊',
    description: 'Prices, trends & data',
    color: '#1e3a5a',
    accent: '#4f8ef7',
  },
  {
    id: 'neighborhoods',
    label: 'Neighborhoods',
    emoji: '🏘️',
    description: 'Local areas & lifestyle',
    color: '#1e3a2e',
    accent: '#4caf50',
  },
  {
    id: 'schools',
    label: 'Schools',
    emoji: '🎓',
    description: 'Districts & ratings',
    color: '#3a2e1e',
    accent: '#ff9800',
  },
  {
    id: 'churches',
    label: 'Churches',
    emoji: '⛪',
    description: 'Places of worship',
    color: '#2e1e3a',
    accent: '#9c27b0',
  },
  {
    id: 'entertainment',
    label: 'Entertainment',
    emoji: '🎭',
    description: 'Fun things to do',
    color: '#3a1e2e',
    accent: '#e91e63',
  },
  {
    id: 'shopping',
    label: 'Shopping',
    emoji: '🛍️',
    description: 'Retail & boutiques',
    color: '#1e2e3a',
    accent: '#00bcd4',
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    emoji: '🍽️',
    description: 'Dining & nightlife',
    color: '#3a2a1e',
    accent: '#ff5722',
  },
  {
    id: 'parks',
    label: 'Parks',
    emoji: '🌳',
    description: 'Outdoors & recreation',
    color: '#1e3a28',
    accent: '#8bc34a',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    emoji: '🏥',
    description: 'Hospitals & clinics',
    color: '#1e3535',
    accent: '#26c6da',
  },
  {
    id: 'transportation',
    label: 'Transportation',
    emoji: '🚗',
    description: 'Commutes & transit',
    color: '#2a2a1e',
    accent: '#ffc107',
  },
];

export default function MenuScreen() {
  const router = useRouter();
  const { state, county, city } = useLocalSearchParams<{
    state: string;
    county: string;
    city: string;
  }>();

  const locationLabel = [city, county, state].filter(Boolean).join(', ');

  function handleCategory(id: string) {
    router.push({
      pathname: '/category',
      params: { category: id, state, county, city },
    });
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>← Change Location</Text>
        </TouchableOpacity>
        <View style={styles.locationBadge}>
          <Text style={styles.locationPin}>📍</Text>
          <Text style={styles.locationText} numberOfLines={1}>
            {locationLabel || 'Your Market'}
          </Text>
        </View>
        <Text style={styles.heading}>What do you want{'\n'}to explore?</Text>
      </View>

      {/* Category grid */}
      <ScrollView
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      >
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={[styles.card, { backgroundColor: cat.color, width: CARD_SIZE, height: CARD_SIZE }]}
            onPress={() => handleCategory(cat.id)}
            activeOpacity={0.85}
          >
            <View style={[styles.cardAccent, { backgroundColor: cat.accent + '33' }]}>
              <Text style={styles.cardEmoji}>{cat.emoji}</Text>
            </View>
            <Text style={styles.cardLabel}>{cat.label}</Text>
            <Text style={styles.cardDescription}>{cat.description}</Text>
            <View style={[styles.cardDot, { backgroundColor: cat.accent }]} />
          </TouchableOpacity>
        ))}

        {/* Spacer so last row isn't cut off */}
        <View style={styles.gridFooter} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1e',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a2e',
  },
  backButton: {
    marginBottom: 16,
  },
  backText: {
    color: '#4f8ef7',
    fontSize: 15,
    fontWeight: '600',
  },
  locationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 16,
    gap: 6,
    borderWidth: 1,
    borderColor: '#2a2a4a',
  },
  locationPin: {
    fontSize: 14,
  },
  locationText: {
    color: '#a0a0c0',
    fontSize: 13,
    fontWeight: '600',
    maxWidth: width - 140,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    lineHeight: 34,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 24,
    paddingTop: 20,
    gap: 12,
  },
  card: {
    borderRadius: 18,
    padding: 16,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  cardAccent: {
    position: 'absolute',
    top: 12,
    left: 12,
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardEmoji: {
    fontSize: 26,
  },
  cardLabel: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  cardDescription: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 11,
    lineHeight: 15,
  },
  cardDot: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  gridFooter: {
    width: '100%',
    height: 24,
  },
});
