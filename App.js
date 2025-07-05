import React from 'react';
import { StatusBar } from 'expo-status-bar';
import TabNavigator from './navigation/TabNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <TabNavigator />
    </>
  );
}
