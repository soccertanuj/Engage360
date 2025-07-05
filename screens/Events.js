import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Header from '../components/Header';

const events = [
  {
    id: '1',
    title: 'Voter Registration Drive',
    location: 'Central Library',
    date: 'July 12',
    image: require('../assets/event1.png'),
    description: 'Help people register to vote with our volunteers.'
  },
  {
    id: '2',
    title: 'Youth Civic Workshop',
    location: 'Myers Park High School',
    date: 'July 14',
    image: require('../assets/event2.png'),
    description: 'Interactive workshop on how civic processes work.'
  }
];

export default function Events() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0c0c0e' }}>
      <Header title="Events" />
      <ScrollView contentContainerStyle={styles.container}>
        {events.map(event => (
          <View key={event.id} style={styles.card}>
            <Image source={event.image} style={styles.image} />
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.text}>{event.location} • {event.date}</Text>
            <Text style={styles.description}>{event.description}</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button} onPress={() => Alert.alert('RSVP Confirmed')}>
                <Text style={styles.buttonText}>RSVP</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Shared!')}>
                <Text style={styles.buttonText}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: { backgroundColor: '#1c1c1e', padding: 15, borderRadius: 12, marginBottom: 16 },
  image: { width: '100%', height: 150, borderRadius: 10, marginBottom: 10 },
  title: { fontSize: 18, color: '#fff', fontWeight: '600', marginBottom: 4 },
  text: { color: '#aaa', fontSize: 14 },
  description: { color: '#ccc', fontSize: 14, marginTop: 6 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  button: { backgroundColor: '#007AFF', padding: 10, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: '600' }
});
