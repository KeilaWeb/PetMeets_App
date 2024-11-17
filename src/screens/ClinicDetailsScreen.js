import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ClinicDetailsScreen({ route }) {
  const { clinic } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: clinic.logo }} style={styles.logo} />
        <View>
          <Text style={styles.clinicName}>{clinic.name}</Text>
          <Text style={styles.address}>{clinic.address}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text>Detalhes da clínica virão aqui...</Text>
        {/* Aqui implementaremos os links e conteúdo nas próximas etapas */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  clinicName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#29374E',
  },
  address: {
    fontSize: 14,
    color: '#496783',
  },
  content: {
    flex: 1,
    marginTop: 16,
  },
});
