import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ClinicCard({ name, logo }) {
  return (
    <View style={styles.card}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: logo }} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 8,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginRight: 14,
    overflow: 'hidden',
    maxWidth: 140,
  },
  logoContainer: {
    width: 90,
    height: 90,
    backgroundColor: '#F6F6F6',
    borderRadius: 45, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  name: {
    fontSize: 14,
    color: '#29374E',
    fontWeight: '600',
    textAlign: 'center', 
    flexWrap: 'wrap',
    maxWidth: 120,
    marginTop: 8,
  },
});
