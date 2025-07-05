import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';

export default function Home() {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState({});

  const questions = [
    {
      id: 1,
      question: 'Which state has the most electoral votes?',
      options: ['Texas', 'Florida', 'California', 'New York'],
      answer: 'California'
    },
    {
      id: 2,
      question: 'Where is the closest event?',
      options: ['Central Park', 'Myers Park High School', 'Union Square', 'White House'],
      answer: 'Myers Park High School'
    }
  ];

  const handleSelect = (qid, option) => {
    if (!selected[qid]) {
      const isCorrect = option === questions.find(q => q.id === qid).answer;
      setSelected({ ...selected, [qid]: option });
      if (isCorrect) setScore(score + 1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0c0c0e' }}>
      <Header title="Home" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Engage360</Text>
        <Text style={styles.subheader}>Engage, Educate, Empower</Text>
        <Text style={styles.description}>
          A one stop shop for all of your political needs whether that’s centralized information or community events.
        </Text>

        <Text style={styles.sectionTitle}>Question of the Day</Text>
        {questions.map(q => (
          <View key={q.id} style={styles.card}>
            <Text style={styles.question}>{q.question}</Text>
            {q.options.map(opt => (
              <TouchableOpacity
                key={opt}
                style={[
                  styles.option,
                  selected[q.id] === opt && (opt === q.answer ? styles.correct : styles.incorrect)
                ]}
                onPress={() => handleSelect(q.id, opt)}
                disabled={!!selected[q.id]}
              >
                <Text style={styles.optionText}>{opt}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        <View style={styles.scoreBox}>
          <Text style={styles.scoreText}>Score: {score}/{questions.length}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginTop: 20 },
  subheader: { fontSize: 14, color: '#aaa', marginBottom: 10 },
  description: { fontSize: 14, color: '#ccc', marginBottom: 20 },
  sectionTitle: { fontSize: 20, color: '#fff', fontWeight: '600', marginBottom: 10 },
  card: { backgroundColor: '#1c1c1e', padding: 15, borderRadius: 12, marginBottom: 15 },
  question: { color: '#fff', fontWeight: '600', marginBottom: 10 },
  option: { backgroundColor: '#333', padding: 10, borderRadius: 8, marginVertical: 4 },
  optionText: { color: '#fff' },
  correct: { backgroundColor: '#4CAF50' },
  incorrect: { backgroundColor: '#E53935' },
  scoreBox: { backgroundColor: '#4fbcff', alignSelf: 'center', padding: 10, borderRadius: 20, marginTop: 20 },
  scoreText: { color: '#000', fontWeight: 'bold' }
});
