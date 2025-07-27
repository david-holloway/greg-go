import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

export default function PhotoScreen({ route, navigation }: any) {
  const { name } = route.params;
  const [photo, setPhoto] = useState<string | null>(null);

  const requestCameraPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Camera Permission',
        'Please enable camera permissions in your device settings to take a selfie.'
      );
      return false;
    }
    return true;
  };

  const handlePhotoChoice = async () => {
    Alert.alert(
      'Choose Photo Option',
      'Would you like to take a selfie or select a photo from your library?',
      [
        {
          text: 'Take a Selfie',
          onPress: async () => {
            const hasPermission = await requestCameraPermission();
            if (hasPermission) {
              const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                quality: 1,
              });
              if (!result.canceled && result.assets.length > 0) {
                setPhoto(result.assets[0].uri);
              }
            }
          },
        },
        {
          text: 'Select a Photo',
          onPress: async () => {
            const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              quality: 1,
            });
            if (!result.canceled && result.assets.length > 0) {
              setPhoto(result.assets[0].uri);
            }
          },
        },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  // Function to handle finish button press
  const handleFinish = () => {
    if (photo) {
      navigation.navigate('GregList', { name, photo });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, {name}! Add a photo:</Text>
      {photo && <Image source={{ uri: photo }} style={styles.image} />}
      <Button title="Add Photo" onPress={handlePhotoChoice} />
      <Button
        title="Finish"
        onPress={handleFinish}
        disabled={!photo}
        color={!photo ? '#ccc' : undefined}
      />
      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => navigation.navigate('Setting')}
      >
        <Ionicons name="settings-outline" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  settingsButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
});