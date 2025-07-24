import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import NameScreen from './src/screens/NameScreen';
import PhotoScreen from './src/screens/PhotoScreen';
import SettingScreen from './src/screens/SettingScreen';
import GregListScreen from './src/screens/GregListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Name" component={NameScreen} />
        <Stack.Screen name="Photo" component={PhotoScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="GregList" component={GregListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}