import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function PhotoScreen({ route }: any) {
  const { name } = route.params;
  const [photo, setPhoto] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled && result.assets.length > 0) {
      setPhoto(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, {name}! Add a photo:</Text>
      {photo && <Image source={{ uri: photo }} style={styles.image} />}
      <Button title="Pick a Photo" onPress={pickImage} />
      <Button title="Finish" onPress={() => {/* Save or navigate */}} disabled={!photo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
});