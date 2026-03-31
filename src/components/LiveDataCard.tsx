/**
 * LiveDataCard — displays real-time market stats fetched from live APIs.
 * Shows a loading skeleton while fetching and gracefully hides on error or empty.
 */

import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { LiveDataResult, LiveStat } from '../services/liveData';

type Props = {
  loading: boolean;
  data: LiveDataResult | null;
  error: string | null;
  accent: string;
};

export function LiveDataCard({ loading, data, error, accent }: Props) {
  // Nothing to show
  if (!loading && (!data || data.stats.length === 0) && !error) return null;

  return (
    <View style={[styles.card, { borderColor: accent + '44' }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={[styles.liveDot, { backgroundColor: loading ? '#555577' : '#4caf50' }]} />
          <Text style={styles.headerTitle}>Live Data</Text>
        </View>
        {data?.fetchedAt ? (
          <Text style={styles.fetchedAt}>Updated {data.fetchedAt}</Text>
        ) : null}
      </View>

      {/* Loading skeleton */}
      {loading && !data && (
        <View style={styles.skeletonRow}>
          {[1, 2, 3].map((i) => (
            <View key={i} style={[styles.skeletonPill, { backgroundColor: accent + '18' }]} />
          ))}
        </View>
      )}

      {/* Stats grid */}
      {data && data.stats.length > 0 && (
        <View style={styles.statsGrid}>
          {data.stats.map((stat) => (
            <StatPill key={stat.label} stat={stat} accent={accent} />
          ))}
        </View>
      )}

      {/* Source attribution */}
      {data && data.stats.length > 0 && (
        <View style={styles.sources}>
          <Text style={styles.sourcesLabel}>Sources: </Text>
          {Array.from(new Set(data.stats.map((s) => s.source))).map((src, i, arr) => {
            const stat = data.stats.find((s) => s.source === src)!;
            return (
              <TouchableOpacity key={src} onPress={() => Linking.openURL(stat.sourceUrl)}>
                <Text style={[styles.sourceLink, { color: accent }]}>
                  {src}{i < arr.length - 1 ? ', ' : ''}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}

      {/* Error state */}
      {error && !data && (
        <Text style={styles.errorText}>Live data unavailable — check API keys in .env</Text>
      )}
    </View>
  );
}

function StatPill({ stat, accent }: { stat: LiveStat; accent: string }) {
  return (
    <View style={[styles.pill, { backgroundColor: accent + '15', borderColor: accent + '33' }]}>
      <Text style={[styles.pillValue, { color: accent }]}>{stat.value}</Text>
      <Text style={styles.pillLabel}>{stat.label}</Text>
      {stat.subtext ? (
        <Text style={styles.pillSubtext} numberOfLines={1}>{stat.subtext}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#12122a',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  fetchedAt: {
    color: '#444466',
    fontSize: 11,
  },

  skeletonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  skeletonPill: {
    flex: 1,
    height: 70,
    borderRadius: 12,
  },

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  pill: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: 'center',
    borderWidth: 1,
    minWidth: 90,
    flex: 1,
  },
  pillValue: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  pillLabel: {
    color: '#a0a0c0',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
  },
  pillSubtext: {
    color: '#555577',
    fontSize: 10,
    marginTop: 3,
    textAlign: 'center',
  },

  sources: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#1e1e3a',
    alignItems: 'center',
  },
  sourcesLabel: {
    color: '#444466',
    fontSize: 11,
  },
  sourceLink: {
    fontSize: 11,
    fontWeight: '600',
  },

  errorText: {
    color: '#555577',
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingVertical: 4,
  },
});
