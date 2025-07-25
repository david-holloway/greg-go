import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/gregUser';
import { v4 as uuidv4 } from 'uuid'; // generate unique IDs

export default function NameScreen({ navigation }: any) {
  const [name, setName] = useState('');

  // Redux dispatch to set the current user
  const dispatch = useDispatch();

  const handleNameSubmit = (name: string) => {
    const newUser = {
      uniqueID: uuidv4(),
      name: name,
      location: null,
      description: null,
      photoFilePath: null,
    };
    dispatch(setCurrentUser(newUser));
    navigation.navigate('Photo', { newUser });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your name?</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Button
        title="Next"
        onPress={() => handleNameSubmit(name)}
        disabled={!name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
});
