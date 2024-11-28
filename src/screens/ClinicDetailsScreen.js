import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import DoctorCard from '../components/DoctorCard';

export default function ClinicDetails() {
  const route = useRoute();
  const { clinicId } = route.params;

  const [clinic, setClinic] = useState(null);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Simula chamada à API para buscar dados da clínica
    const fetchClinicData = async () => {
      const { clinics, doctors, doctorClinicRelations } = await import('../../backend/data'); 
      const clinicData = clinics.find((c) => c.id === clinicId);
      setClinic(clinicData);

      const associatedDoctors = doctorClinicRelations
        .filter((relation) => relation.clinicId === clinicId)
        .map((relation) => doctors.find((d) => d.id === relation.doctorId));
      setDoctors(associatedDoctors);
    };

    fetchClinicData();
  }, [clinicId]);

  if (!clinic) return <Text>Carregando...</Text>;

  return (
    <View style={styles.container}>
      {/* Dados da clínica */}
      <View style={styles.clinicHeader}>
        <Image source={{ uri: clinic.logo }} style={styles.clinicLogo} />
        <Text style={styles.clinicName}>{clinic.clinic}</Text>
        <Text style={styles.clinicAddress}>{clinic.address}</Text>
        <Text style={styles.clinicAbout}>{clinic.about}</Text>
      </View>

      {/* Lista de médicos */}
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DoctorCard
            doctorName={item.name}
            specialty={item.specialty.join(', ')}
            clinicLogo={clinic.logo}
            onSchedule={() => console.log(`Agendando com ${item.name}`)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFF',
  },
  clinicHeader: {
    marginBottom: 20,
    alignItems: 'center',
  },
  clinicLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  clinicName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#29374E',
  },
  clinicAddress: {
    fontSize: 14,
    color: '#29374E',
    marginBottom: 10,
  },
  clinicAbout: {
    fontSize: 12,
    color: '#29374E',
    textAlign: 'center',
  },
});
