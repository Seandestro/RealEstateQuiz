import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const questions = [
  {
    question: "What is the most popular neighborhood for young families in your area?",
    options: ["Riverside", "Oak Park", "Downtown", "Maplewood"],
    correct: 1,
  },
  {
    question: "Which school district is rated #1 in the area?",
    options: ["Westside USD", "Northgate USD", "Central USD", "Eastview USD"],
    correct: 0,
  },
  {
    question: "What is the average home price in Oak Park?",
    options: ["$350,000", "$520,000", "$680,000", "$1,200,000"],
    correct: 2,
  },
];

export default function QuizScreen() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  function handleAnswer(index) {
    if (selected !== null) return;
    setSelected(index);
    if (index === question.correct) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 1000);
  }

  function getOptionStyle(index) {
    if (selected === null) return styles.option;
    if (index === question.correct) return [styles.option, styles.correct];
    if (index === selected) return [styles.option, styles.wrong];
    return styles.option;
  }

  if (finished) {
    return (
      <View style={styles.container}>
        <Text style={styles.emoji}>🏆</Text>
        <Text style={styles.title}>Quiz Complete!</Text>
        <Text style={styles.score}>
          You scored {score} out of {questions.length}
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => {
          setCurrent(0);
          setScore(0);
          setSelected(null);
          setFinished(false);
        }}>
          <Text style={styles.buttonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>
        Question {current + 1} of {questions.length}
      </Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${((current + 1) / questions.length) * 100}%` }]} />
      </View>
      <Text style={styles.question}>{question.question}</Text>
      {question.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={getOptionStyle(index)}
          onPress={() => handleAnswer(index)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.scoreText}>Score: {score} 🌟</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    padding: 24,
    justifyContent: 'center',
  },
  progress: {
    color: '#a0a0b0',
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#2a2a4a',
    borderRadius: 4,
    marginBottom: 32,
  },
  progressFill: {
    height: 8,
    backgroundColor: '#4f8ef7',
    borderRadius: 4,
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 32,
    textAlign: 'center',
    lineHeight: 32,
  },
  option: {
    backgroundColor: '#2a2a4a',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#2a2a4a',
  },
  correct: {
    borderColor: '#4caf50',
    backgroundColor: '#1a3a1a',
  },
  wrong: {
    borderColor: '#f44336',
    backgroundColor: '#3a1a1a',
  },
  optionText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  scoreText: {
    color: '#a0a0b0',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 24,
  },
  emoji: {
    fontSize: 64,
    textAlign: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
  },
  score: {
    fontSize: 20,
    color: '#a0a0b0',
    textAlign: 'center',
    marginBottom: 48,
  },
  button: {
    backgroundColor: '#4f8ef7',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});