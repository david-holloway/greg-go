import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Button title="Get Started" onPress={() => navigation.navigate('Name')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, marginBottom: 24 },
});