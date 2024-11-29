import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function DoctorCard({ doctorName, specialty, clinicLogo, onSchedule }) {
  return (
    <View style={styles.card}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: clinicLogo }} style={styles.logo} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.doctorName}>{doctorName}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>
      <TouchableOpacity style={styles.scheduleButton} onPress={onSchedule}>
        <Text style={styles.scheduleButton}>Agendar</Text>
      </TouchableOpacity>
    </View>
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
  },
  logoContainer: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  infoContainer: {
    flex: 1,
  },
  doctorName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#29374E',
  },
  specialty: {
    fontSize: 12,
    color: '#29374E',
  },
  scheduleButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  scheduleButton: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
