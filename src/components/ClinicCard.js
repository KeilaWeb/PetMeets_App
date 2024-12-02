import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ClinicCard({ name, logo }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ClinicDetails', { clinic: { name, logo } })}
    >
      <View style={styles.logoContainer}>
        <Image source={{ uri: logo }} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 10,
    overflow: 'hidden',
    maxWidth: 140,
    background: '#29374E'
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 45, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  name: {
    fontSize: 12,
    color: '#29374E',
    fontWeight: '600',
    textAlign: 'center', 
    flexWrap: 'wrap',
    maxWidth: 120,
    marginTop: 4,
  },
});
