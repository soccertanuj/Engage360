import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Header from '../components/Header';

const news = [
  {
    id: '1',
    title: 'Supreme Court Rules on Major Voting Case',
    source: 'NY Times',
    date: 'July 3, 2025',
    summary: 'The Supreme Court made a landmark decision on state redistricting powers.',
    stats: '12.3k views • 320 likes • 45 comments'
  },
  {
    id: '2',
    title: 'Youth Turnout Hits Record High',
    source: 'Politico',
    date: 'July 2, 2025',
    summary: 'Young voters are showing up in unprecedented numbers for civic engagement.',
    stats: '8.9k views • 240 likes • 30 comments'
  }
];

export default function News() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0c0c0e' }}>
      <Header title="News" />
      <ScrollView contentContainerStyle={styles.container}>
        {news.map(article => (
          <View key={article.id} style={styles.card}>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.meta}>{article.source} • {article.date}</Text>
            <Text style={styles.summary}>{article.summary}</Text>
            <TouchableOpacity style={styles.button} onPress={() => Alert.alert(article.stats)}>
              <Text style={styles.buttonText}>View Stats</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: { backgroundColor: '#1c1c1e', padding: 15, borderRadius: 12, marginBottom: 16 },
  title: { fontSize: 18, color: '#fff', fontWeight: '600' },
  meta: { color: '#aaa', fontSize: 12, marginBottom: 6 },
  summary: { color: '#ccc', fontSize: 14, marginBottom: 10 },
  button: { backgroundColor: '#007AFF', padding: 8, borderRadius: 8, alignSelf: 'flex-start' },
  buttonText: { color: '#fff', fontWeight: '600' }
});
