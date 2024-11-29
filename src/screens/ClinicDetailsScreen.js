import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { getClinics, getDoctors } from '../api/clinicService';

export default function ClinicDetails() {
  const route = useRoute();
  const { clinic } = route.params;

  const [clinicDetails, setClinicDetails] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Carregar detalhes da clínica
        const details = await getClinics(clinic.id);
        setClinicDetails(details);

        // Carregar médicos associados à clínica
        const doctorsData = await getDoctors(clinic.id); // Certifique-se de que a API retorna os médicos corretos
        setDoctors(doctorsData);
      } catch (error) {
        console.error('Erro ao carregar os dados da clínica:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [clinic]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#29374E" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Informações da Clínica */}
      {clinicDetails && (
        <View style={styles.clinicHeader}>
          <Image
            source={{ uri: clinicDetails.logo }}
            style={styles.clinicLogo}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.clinicName}>{clinicDetails.name}</Text>
            <Text style={styles.clinicAddress}>{clinicDetails.address}</Text>
          </View>
        </View>
      )}

      {/* Descrição da Clínica */}
      {clinicDetails && (
        <Text style={styles.description}>{clinicDetails.description}</Text>
      )}

      {/* Lista de Médicos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Médicos Disponíveis</Text>
        {doctors.map((doctor) => (
          <View key={doctor.id} style={styles.doctorCard}>
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, backgroundColor: '#ffffff' },
  loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  clinicHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  clinicLogo: { width: 60, height: 60, marginRight: 15, borderRadius: 8 },
  clinicName: { fontSize: 18, fontWeight: 'bold', color: '#29374E' },
  clinicAddress: { fontSize: 14, color: '#7A869A' },
  description: { fontSize: 14, color: '#29374E', marginBottom: 20 },
  section: { marginTop: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#29374E' },
  doctorCard: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#E0E0E0' },
  doctorName: { fontSize: 16, fontWeight: 'bold', color: '#29374E' },
  doctorSpecialty: { fontSize: 14, color: '#7A869A' },
});
