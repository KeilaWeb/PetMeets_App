import React, { useState, useEffect } from 'react';
import { View, TextInput, ScrollView, ActivityIndicator, Text, StyleSheet, } from 'react-native';
import { getClinics, getDoctors } from '../api/clinicService';
import DoctorCard from '../components/DoctorCard';

export default function SearchScreen() {
  const [clinics, setClinics] = useState([]);
  const [doctors, setDoctors] = useState([]); 
  const [filteredDoctors, setFilteredDoctors] = useState([]); // Lista filtrada com base no termo de pesquisa
  const [searchTerm, setSearchTerm] = useState(''); // Termo de pesquisa
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const clinicsData = await getClinics();
        setClinics(clinicsData);

        const doctorsData = await getDoctors(); // Simula a chamada para obter médicos
        setDoctors(doctorsData);
        setFilteredDoctors(doctorsData); // Inicialmente, todos os médicos são exibidos
      } catch (error) {
        console.error('Erro ao carregar médicos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // Atualiza a lista de médicos conforme o termo de pesquisa muda
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredDoctors(doctors); // Mostra todos os médicos se não houver busca
    } else {
      const filtered = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredDoctors(filtered);
    }
  }, [searchTerm, doctors]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#29374E" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Campo de pesquisa */}
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar médicos"
        value={searchTerm}
        onChangeText={setSearchTerm} // Atualiza o termo de pesquisa
        placeholderTextColor="#8E8E93"
      />

      {/* Lista de médicos */}
      <ScrollView>
        <View style={styles.section}>
        <Text style={styles.sectionTitle}>Medicos cadastrados</Text>
          {filteredDoctors.length === 0 ? (
            <Text style={styles.noDoctors}>Nenhum médico encontrado</Text>
          ) : (
            filteredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctorName={doctor.name}
                specialty={doctor.specialty}
                onSchedule={() => alert(`Agendamento com ${doctor.name}`)}
              />
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#ffffff',
    paddingBottom: 60
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 20,
    color: '#29374E',
    fontSize: 16,
  },
  section: {
    marginBottom: 20,
  },
  noDoctors: {
    textAlign: 'center',
    color: '#8E8E93',
    fontSize: 16,
    marginTop: 20,
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    color: '#29374E', 
  },
});
