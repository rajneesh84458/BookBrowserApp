// src/navigation/AppNavigator.js
import React from 'react';
// eslint-disable-next-line prettier/prettier
import { NavigationContainer } from '@react-navigation/native';
// eslint-disable-next-line prettier/prettier
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import BookDetailScreen from '../screens/BookDetailScreen';
import FilterScreen from '../screens/FilterScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="BookDetails" component={BookDetailScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
