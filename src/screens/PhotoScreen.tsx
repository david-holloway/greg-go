import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, addGregUser } from '../redux/gregUser';

export default function PhotoScreen({ route }: any) {
  
  const dispatch = useDispatch();

  const currentUser = useSelector((state: any) => state.gregUsers.currentUser); // Pulls the current user from Redux state
  const [photo, setPhoto] = useState<string | null>(currentUser?.photoFilePath || null); // Initialize with existing photo if available

  const updatePhoto = (uri: string) => {
  setPhoto(uri);
  const updatedUser = { ...currentUser, photoFilePath: uri };
  dispatch(setCurrentUser(updatedUser));
};


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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, {currentUser?.name}! Add a photo:</Text>
      {photo && <Image source={{ uri: photo }} style={styles.image} />}
      <Button title="Add Photo" onPress={handlePhotoChoice} />
      <Button title="Finish" onPress={() => {/* Save or navigate */}} disabled={!photo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
});