import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ServiceMenu({ logo, name, address }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('DetalhesClinica', { clinic: { name, logo, address } })}
    >
      <View style={styles.logoContainer}>
        <Image source={{ uri: logo }} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        {address && <Text style={styles.address}>{address}</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { 
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#F6F6F6', 
    marginVertical: 6, 
    padding: 10, 
    borderRadius: 20, 
    overflow: 'hidden', 
  },
  logoContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#F6F6F6',
    borderRadius: 45, 
    justifyContent: 'center',
    alignItems: 'center',   
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
    color: '#29374E',
    fontSize: 12, 
  },
});
