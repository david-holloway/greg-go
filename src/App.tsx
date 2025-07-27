import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/Welcome/WelcomeScreen';
import NameScreen from './screens/Name/NameScreen';
import PhotoScreen from './screens/Photo/PhotoScreen';
import SettingScreen from './screens/Setting/SettingScreen';
import GregListScreen from './screens/GregList/GregListScreen';

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