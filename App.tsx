import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import NameScreen from './src/screens/NameScreen';
import PhotoScreen from './src/screens/PhotoScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Name" component={NameScreen} />
          <Stack.Screen name="Photo" component={PhotoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}