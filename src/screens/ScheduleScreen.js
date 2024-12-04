import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import ServiceClinic from '../components/ServiceClinic';
import { getClinics } from '../api/clinicService';

export default function ScheduleScreen() {
    const [clinics, setClinics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchClinics = async () => {
        try {
          const clinicsData = await getClinics();
          setClinics(clinicsData);
        } catch (error) {
          console.error('Erro ao carregar clínicas:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchClinics();
    }, []);
    return (
        <ScrollView style={styles.container}>
           <TextInput style={styles.searchInput} placeholder="Pesquisar clínicas" />
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Agendar</Text>
            {loading ? (
            <ActivityIndicator size="large" color="#29374E" />
            ) : (
              clinics.map((clinic) => (
                <ServiceClinic key={clinic.id} logo={clinic.logo} name={clinic.name} address={clinic.address} phone={clinic.phone} />
              ))
            )}
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 18, backgroundColor: '#ffffff' },
    searchInput: { padding: 10, backgroundColor: '#f0f0f0', borderRadius: 8, marginBottom: 20, color: '#29374E', },
    section: { marginVertical: 15, overflow: 'hidden', },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#29374E', },
});