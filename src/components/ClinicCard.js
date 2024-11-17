import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ClinicCard({ name, logo }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: logo }} style={styles.logo} />
      <View>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'column', alignItems: 'center', marginVertical: 8, padding: 12, backgroundColor: '#fff', borderRadius: 20, marginRight: 14, overflow: 'hidden' },
  logo: { width: 80, height: 80, borderRadius: 80, marginBottom: 8 },
  name: { fontSize: 14, fontWeight: 'semibold', flexWrap: 'wrap' },
});
