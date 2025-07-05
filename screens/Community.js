import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Header from '../components/Header';

export default function Community() {
  const [posts, setPosts] = useState([
    { id: '1', user: 'civic_learner', text: 'Just attended my first town hall and it was eye-opening!' }
  ]);
  const [input, setInput] = useState('');

  const handlePost = () => {
    if (input.trim()) {
      setPosts([{ id: Date.now().toString(), user: 'you', text: input }, ...posts]);
      setInput('');
    }
  };

  const handleDelete = id => {
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0c0c0e' }}>
      <Header title="Community" />
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          placeholder="Share something..."
          placeholderTextColor="#888"
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handlePost}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>

        {posts.map(post => (
          <View key={post.id} style={styles.post}>
            <Text style={styles.user}>@{post.user}</Text>
            <Text style={styles.text}>{post.text}</Text>
            {post.user === 'you' && (
              <TouchableOpacity onPress={() => handleDelete(post.id)}>
                <Text style={styles.delete}>Delete</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { backgroundColor: '#1c1c1e', color: '#fff', padding: 12, borderRadius: 8, marginBottom: 10 },
  button: { backgroundColor: '#007AFF', padding: 10, borderRadius: 8, marginBottom: 20 },
  buttonText: { color: '#fff', fontWeight: '600', textAlign: 'center' },
  post: { backgroundColor: '#1c1c1e', padding: 15, borderRadius: 10, marginBottom: 12 },
  user: { color: '#4fbcff', fontWeight: 'bold', marginBottom: 6 },
  text: { color: '#eee', fontSize: 14 },
  delete: { color: '#ff5555', marginTop: 8 }
});
