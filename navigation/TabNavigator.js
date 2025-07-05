import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Events from '../screens/Events';
import News from '../screens/News';
import Community from '../screens/Community';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Events') iconName = 'calendar';
            else if (route.name === 'News') iconName = 'newspaper';
            else if (route.name === 'Community') iconName = 'chatbubbles';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#0c0c0e' },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Events" component={Events} />
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="Community" component={Community} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
