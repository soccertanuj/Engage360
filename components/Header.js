import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.banner}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#007AFF',
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#0060D3',
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
