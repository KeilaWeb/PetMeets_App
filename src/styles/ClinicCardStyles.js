import React from 'react';
import { View, Text, Image } from 'react-native';
import ClinicCardStyles from '../styles/ClinicCardStyles';

export default function ClinicCard({ name, address }) {
  return (
    <View style={ClinicCardStyles.card}>
      <Image source={{ uri: 'https://example.com/clinic-logo' }} style={ClinicCardStyles.logo} />
      <View>
        <Text style={ClinicCardStyles.name}>{name}</Text>
        {address && <Text style={ClinicCardStyles.address}>{address}</Text>}
      </View>
    </View>
  );
}
