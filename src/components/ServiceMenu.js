import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ServiceMenu({ logo, name, address }) {
  return (
    <View style={styles.card}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: logo }} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        {address && <Text style={styles.address}>{address}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 8, 
    padding: 12, 
    backgroundColor: '#fff', 
    borderRadius: 20, 
    marginRight: 14,
    overflow: 'hidden', 
  },
  logoContainer: {
    width: 70,
    height: 70,
    backgroundColor: '#F6F6F6',
    borderRadius: 45, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    
    position: 'relative',
    marginRight: 10 
  },
  logo: { 
    width: 60, 
    height: 60, 
    borderRadius: 80,  
  },
  name: { 
    fontSize: 14,
    color: '#29374E', 
    fontWeight: 'bold' 
  },
  address: { 
    color: '#29374E' },
});
