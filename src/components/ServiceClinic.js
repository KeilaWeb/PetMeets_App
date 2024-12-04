import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function formatPhoneNumber(phone) {
  const cleaned = ('' + phone).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phone;
}

export default function ServiceClinic({ id, logo, name, address, phone }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ClinicDetails', { clinicId: id })}
    >
      <View style={styles.logoContainer}>
        <Image source={{ uri: logo }} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        {address && <Text style={styles.address}>{address}</Text>}
        {phone ? (
          <Text style={styles.phone}>{formatPhoneNumber(phone)}</Text>
        ) : (
          <Text style={styles.address}>Telefone não disponível</Text>
        )}
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
    marginBottom: 4
  },  
  phone: {
    color: '#29374E',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
