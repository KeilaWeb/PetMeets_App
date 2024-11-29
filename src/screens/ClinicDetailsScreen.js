import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';

import ServiceMenu from '../components/ServiceMenu';
import DoctorCard from '../components/DoctorCard';
import { getDoctors } from '../api/clinicService';

export default function ClinicDetails() {
  const route = useRoute();
  const { clinic } = route.params;

  const [doctors, setDoctors] = useState([]);  // Lista de médicos
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        // Carregar médicos associados à clínica
        const doctorsData = await getDoctors(clinic.id);  // Passa o clinic.id
        console.log("Médicos retornados: ", doctorsData); 
        setDoctors(doctorsData);
      } catch (error) {
        console.error('Erro ao carregar médicos da clínica:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [clinic.id]);  // Recarrega sempre que a clínica mudar

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
      <View style={styles.clinicInfo}>
        <ServiceMenu
          id={clinic.id}
          logo={clinic.logo}
          name={clinic.name}
          address={clinic.address}
        />
        <Text style={styles.description}>{clinic.description}</Text>
      </View>

      {/* Lista de Médicos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Médicos Disponíveis</Text>
        {doctors.length > 0 ? (
          doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctorName={doctor.name}
              specialty={doctor.specialty}
              onSchedule={() => alert(`Agendamento com ${doctor.name}`)}
            />
          ))
        ) : (
          <Text>Nenhum médico encontrado para esta clínica</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, backgroundColor: '#ffffff' },
  loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  clinicInfo: { marginBottom: 20 },
  description: { fontSize: 14, color: '#29374E', marginTop: 10 },
  section: { marginTop: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#29374E' },
});
