import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Carousel from '../components/Carousel';
import ClinicCard from '../components/ClinicCard';
import ServiceMenu from '../components/ServiceMenu';
import { getClinics } from '../api/clinicService';
import { carouselData } from '../api/carouselData';

export default function HomeScreen() {
  const navigation = useNavigation();
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
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.headerIcons}>
          <Image source={require('../../assets/user.png')} style={styles.avatar} />
          <Text style={styles.greeting}>Olá, usuário!</Text>
        </View>
        <View style={styles.headerIcons}>
          <Image source={require('../../assets/notifications.svg')} style={styles.icon} />
          <Image source={require('../../assets/help_circle.svg')} style={styles.icon} />
        </View>
      </View>

      {/* Barra de pesquisa */}
      <TextInput style={styles.searchInput} placeholder="Pesquisar clínicas" />

      {/* Carrossel */}
      <Carousel cards={carouselData} />

      <ScrollView>
      {/* Lista de Clínicas Próximas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mais próximos a você</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#29374E" /> ) : 
          (
            <ScrollView horizontal style={styles.scrollCard}>
              {clinics.map((clinic) => (
                <TouchableOpacity
                  key={clinic.id}
                  onPress={() => navigation.navigate('ClinicDetails', { clinic })}
                >
                  <ClinicCard name={clinic.clinic} logo={clinic.logo} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>
      </ScrollView>

      <ScrollView>
        {/* Lista Completa de Clínicas */}
        <View style={styles.section}>
        <Text style={styles.sectionTitle}>Todos</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#29374E" /> ) : 
        (
          <ScrollView vertical>
            {clinics.map((clinic) => (
              <TouchableOpacity
                key={clinic.id}
                onPress={() => navigation.navigate('ClinicDetails', { clinic })}
              >
                <ServiceMenu key={clinic.id} logo={clinic.logo} name={clinic.clinic} address={clinic.address} />
              </TouchableOpacity>
            ))}
          </ScrollView>
          )}
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, backgroundColor: '#ffffff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  icon: { width: 30, height: 30, margin: 10, color: '#29374E', },
  avatar: { width: 40, height: 40, borderRadius: 20, marginEnd: 20 },
  greeting: { fontSize: 24, fontWeight: '600', color: '#29374E', },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  searchInput: { padding: 10, backgroundColor: '#f0f0f0', borderRadius: 8, marginBottom: 20, color: '#29374E', },
  section: { marginVertical: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 0, color: '#29374E', },
  scrollCard: { overflowX: 'hiden' }
});
