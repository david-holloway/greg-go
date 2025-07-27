import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type User = {
  id: string;
  name: string;
  photoUri: string;
  distance: number;
};

const users: User[] = [
  { id: '1', name: 'Greg', photoUri: 'https://randomuser.me/api/portraits/lego/1.jpg', distance: 5 },
  { id: '2', name: 'greg', photoUri: 'https://randomuser.me/api/portraits/lego/5.jpg', distance: 10 },
  { id: '3', name: 'greg', photoUri: 'https://randomuser.me/api/portraits/lego/0.jpg', distance: 15 },
  // Add more users as needed
];

export default function GregListScreen() {
  return (
    <View style={styles.container}>
      {users.map(user => (
        <View key={user.id} style={styles.userItem}>
          <Image source={{ uri: user.photoUri }} style={styles.userImage} />
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userName}> {user.distance} km away</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  userImage: { width: 48, height: 48, borderRadius: 24, marginRight: 16 },
  userName: { fontSize: 18 },
});