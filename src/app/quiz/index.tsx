import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ALL_QUESTIONS } from '../../data/questions';

const CATEGORY_META: Record<string, { label: string; emoji: string; color: string }> = {
  market:          { label: 'Market',         emoji: '📊', color: '#4f8ef7' },
  neighborhoods:   { label: 'Neighborhoods',  emoji: '🏘️', color: '#4caf50' },
  schools:         { label: 'Schools',        emoji: '🎓', color: '#ff9800' },
  churches:        { label: 'Churches',       emoji: '⛪', color: '#9c27b0' },
  entertainment:   { label: 'Entertainment',  emoji: '🎭', color: '#e91e63' },
  shopping:        { label: 'Shopping',       emoji: '🛍️', color: '#00bcd4' },
  restaurants:     { label: 'Restaurants',    emoji: '🍽️', color: '#ff5722' },
  parks:           { label: 'Parks',          emoji: '🌳', color: '#8bc34a' },
  healthcare:      { label: 'Healthcare',     emoji: '🏥', color: '#26c6da' },
  transportation:  { label: 'Transportation', emoji: '🚗', color: '#ffc107' },
};

function getScoreLabel(score: number, total: number) {
  const pct = score / total;
  if (pct === 1)   return { label: 'Perfect Score! 🏆', color: '#ffd700' };
  if (pct >= 0.8)  return { label: 'Great Work! 🌟',    color: '#4caf50' };
  if (pct >= 0.6)  return { label: 'Good Effort! 👍',   color: '#4f8ef7' };
  return             { label: 'Keep Practicing! 💪',     color: '#ff9800' };
}

export default function QuizScreen() {
  const router = useRouter();
  const { category = 'market', state, county, city } = useLocalSearchParams<{
    category: string; state: string; county: string; city: string;
  }>();

  const questions = ALL_QUESTIONS[category] ?? ALL_QUESTIONS['market'];
  const meta = CATEGORY_META[category] ?? CATEGORY_META['market'];

  const [current, setCurrent]     = useState(0);
  const [selected, setSelected]   = useState<number | null>(null);
  const [score, setScore]         = useState(0);
  const [finished, setFinished]   = useState(false);
  const [showExplain, setShowExplain] = useState(false);

  const question = questions[current];
  const locationLabel = [city, county, state].filter(Boolean).join(', ');

  function handleAnswer(index: number) {
    if (selected !== null) return;
    setSelected(index);
    if (index === question.correct) setScore((s) => s + 1);
    setShowExplain(true);
  }

  function handleNext() {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowExplain(false);
    } else {
      setFinished(true);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setShowExplain(false);
  }

  function getOptionStyle(index: number) {
    if (selected === null) return styles.option;
    if (index === question.correct) return [styles.option, styles.optionCorrect];
    if (index === selected)         return [styles.option, styles.optionWrong];
    return [styles.option, styles.optionDimmed];
  }

  function getOptionTextStyle(index: number) {
    if (selected === null) return styles.optionText;
    if (index === question.correct) return [styles.optionText, styles.optionTextCorrect];
    if (index === selected)         return [styles.optionText, styles.optionTextWrong];
    return [styles.optionText, styles.optionTextDimmed];
  }

  // ── Finished screen ──────────────────────────────────────────────
  if (finished) {
    const { label: scoreLabel, color: scoreColor } = getScoreLabel(score, questions.length);
    return (
      <View style={styles.container}>
        <View style={styles.finishCard}>
          <Text style={styles.finishEmoji}>{meta.emoji}</Text>
          <Text style={styles.finishTitle}>Quiz Complete!</Text>
          <Text style={styles.finishCategory}>{meta.label}</Text>
          {locationLabel ? (
            <Text style={styles.finishLocation}>📍 {locationLabel}</Text>
          ) : null}
          <View style={[styles.scoreBadge, { borderColor: scoreColor }]}>
            <Text style={[styles.scoreNum, { color: scoreColor }]}>{score}/{questions.length}</Text>
            <Text style={[styles.scoreLabel, { color: scoreColor }]}>{scoreLabel}</Text>
          </View>

          {/* Per-question summary */}
          <ScrollView style={styles.summaryScroll} showsVerticalScrollIndicator={false}>
            {questions.map((q, i) => (
              <View key={q.id} style={styles.summaryRow}>
                <Text style={styles.summaryIcon}>
                  {/* We don't track per-answer, so just show question numbers */}
                  {i + 1}.
                </Text>
                <Text style={styles.summaryQ} numberOfLines={2}>{q.question}</Text>
              </View>
            ))}
          </ScrollView>

          <Pressable style={[styles.btn, { backgroundColor: meta.color }]} onPress={handleRestart}>
            <Text style={styles.btnText}>Try Again</Text>
          </Pressable>
          <Pressable style={styles.btnOutline} onPress={() => router.back()}>
            <Text style={[styles.btnOutlineText, { color: meta.color }]}>Back to Menu</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  // ── Quiz screen ───────────────────────────────────────────────────
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Menu</Text>
        </Pressable>
        <View style={[styles.categoryBadge, { backgroundColor: meta.color + '22', borderColor: meta.color + '55' }]}>
          <Text style={styles.categoryEmoji}>{meta.emoji}</Text>
          <Text style={[styles.categoryLabel, { color: meta.color }]}>{meta.label}</Text>
        </View>
      </View>

      {/* Progress */}
      <View style={styles.progressRow}>
        <Text style={styles.progressText}>Question {current + 1} of {questions.length}</Text>
        <Text style={styles.scoreText}>🌟 {score}</Text>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${((current) / questions.length) * 100}%` as any, backgroundColor: meta.color }]} />
      </View>

      {/* Question */}
      <Text style={styles.question}>{question.question}</Text>

      {/* Options */}
      {question.options.map((option, index) => (
        <Pressable
          key={index}
          style={getOptionStyle(index)}
          onPress={() => handleAnswer(index)}
          disabled={selected !== null}
        >
          <View style={styles.optionInner}>
            <View style={[styles.optionLetter, selected !== null && index === question.correct && styles.optionLetterCorrect, selected !== null && index === selected && index !== question.correct && styles.optionLetterWrong]}>
              <Text style={styles.optionLetterText}>{['A', 'B', 'C', 'D'][index]}</Text>
            </View>
            <Text style={getOptionTextStyle(index)}>{option}</Text>
          </View>
        </Pressable>
      ))}

      {/* Explanation */}
      {showExplain && (
        <View style={[styles.explanationBox, { borderColor: selected === question.correct ? '#4caf50' : '#ff5722' }]}>
          <Text style={styles.explanationIcon}>
            {selected === question.correct ? '✅' : '❌'}
          </Text>
          <Text style={styles.explanationText}>{question.explanation}</Text>
        </View>
      )}

      {/* Next button */}
      {showExplain && (
        <Pressable style={[styles.btn, { backgroundColor: meta.color, marginTop: 12 }]} onPress={handleNext}>
          <Text style={styles.btnText}>
            {current + 1 < questions.length ? 'Next Question →' : 'See Results →'}
          </Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f1e', padding: 20, paddingTop: 52 },

  // Header
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  backBtn: { padding: 4 },
  backText: { color: '#4f8ef7', fontSize: 15, fontWeight: '600' },
  categoryBadge: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, borderWidth: 1 },
  categoryEmoji: { fontSize: 16 },
  categoryLabel: { fontSize: 13, fontWeight: '700' },

  // Progress
  progressRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  progressText: { color: '#7070a0', fontSize: 13 },
  scoreText: { color: '#a0a0c0', fontSize: 14, fontWeight: '600' },
  progressBar: { height: 6, backgroundColor: '#1a1a2e', borderRadius: 3, marginBottom: 28 },
  progressFill: { height: 6, borderRadius: 3 },

  // Question
  question: { fontSize: 20, fontWeight: 'bold', color: '#ffffff', marginBottom: 24, lineHeight: 30 },

  // Options
  option: { backgroundColor: '#1a1a2e', borderRadius: 14, marginBottom: 10, borderWidth: 2, borderColor: '#2a2a4a' },
  optionCorrect: { borderColor: '#4caf50', backgroundColor: '#0d2a0d' },
  optionWrong: { borderColor: '#f44336', backgroundColor: '#2a0d0d' },
  optionDimmed: { opacity: 0.5 },
  optionInner: { flexDirection: 'row', alignItems: 'center', padding: 14, gap: 12 },
  optionLetter: { width: 30, height: 30, borderRadius: 15, backgroundColor: '#2a2a4a', alignItems: 'center', justifyContent: 'center' },
  optionLetterCorrect: { backgroundColor: '#4caf50' },
  optionLetterWrong: { backgroundColor: '#f44336' },
  optionLetterText: { color: '#ffffff', fontSize: 13, fontWeight: 'bold' },
  optionText: { color: '#c0c0d8', fontSize: 15, flex: 1 },
  optionTextCorrect: { color: '#4caf50', fontWeight: '600' },
  optionTextWrong: { color: '#f44336' },
  optionTextDimmed: { color: '#555577' },

  // Explanation
  explanationBox: { backgroundColor: '#1a1a2e', borderRadius: 12, padding: 14, borderWidth: 1.5, flexDirection: 'row', gap: 10, alignItems: 'flex-start', marginTop: 4 },
  explanationIcon: { fontSize: 18 },
  explanationText: { color: '#a0a0c0', fontSize: 13, lineHeight: 20, flex: 1 },

  // Buttons
  btn: { paddingVertical: 15, borderRadius: 14, alignItems: 'center' },
  btnText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
  btnOutline: { paddingVertical: 14, borderRadius: 14, alignItems: 'center', borderWidth: 2, borderColor: '#2a2a4a', marginTop: 10 },
  btnOutlineText: { fontSize: 16, fontWeight: '600' },

  // Finish screen
  finishCard: { flex: 1, alignItems: 'center', paddingTop: 20 },
  finishEmoji: { fontSize: 56, marginBottom: 12 },
  finishTitle: { fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginBottom: 4 },
  finishCategory: { fontSize: 16, color: '#7070a0', marginBottom: 4 },
  finishLocation: { fontSize: 13, color: '#555577', marginBottom: 20 },
  scoreBadge: { borderWidth: 2, borderRadius: 16, paddingHorizontal: 32, paddingVertical: 16, alignItems: 'center', marginBottom: 20 },
  scoreNum: { fontSize: 42, fontWeight: 'bold' },
  scoreLabel: { fontSize: 16, fontWeight: '600', marginTop: 4 },
  summaryScroll: { width: '100%', maxHeight: 160, marginBottom: 20 },
  summaryRow: { flexDirection: 'row', gap: 8, paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: '#1a1a2e' },
  summaryIcon: { color: '#555577', fontSize: 13, width: 24 },
  summaryQ: { color: '#7070a0', fontSize: 12, flex: 1 },
});
