import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

export default function ClinicCard({ name }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }} style={styles.logo} />
      <View>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'column', alignItems: 'center',  marginVertical: 8, padding: 12, backgroundColor: '#fff', borderRadius: 20, marginRight: 14 },
  logo: { width: 80, height: 80, borderRadius: 80, marginBottom: 8 },
  name: { fontSize: 14, fontWeight: 'medium' },
  address: { color: 'gray' },
});
