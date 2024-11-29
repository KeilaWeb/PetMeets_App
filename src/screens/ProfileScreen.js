import React from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import DoctorCard from '../components/DoctorCard';
import { getClinics, getDoctors } from '../api/clinicService';

export default function ProfileScreen() {    
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
        const doctorsData = await getDoctors(clinic.id);
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
      {/* Lista de Médicos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Médicos Disponíveis</Text>
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctorName={doctor.name}
            specialty={doctor.specialty}
            clinicLogo={clinicDetails.logo}
            onSchedule={() => alert(`Agendamento com ${doctor.name}`)}
          />
        ))}
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