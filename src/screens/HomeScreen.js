import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Image } from 'react-native';
import Carousel from '../components/Carousel';
import ClinicCard from '../components/ClinicCard';
import ServiceMenu from '../components/ServiceMenu';

export default function HomeScreen() {
  const cards = [
    {
      image: 'https://via.placeholder.com/400',
      text: 'Receba pontos por benefícios dentro do app, sem necessidade de dinheiro ou cartão.',
    },
    {
      image: 'https://via.placeholder.com/400/FF0000',
      text: 'Descubra clínicas parceiras e economize!',
    },
    {
      image: 'https://via.placeholder.com/400/00FF00',
      text: 'Ofertas exclusivas para nossos usuários.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcons}>
          <Image source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }} style={styles.avatar} />
          <Text style={styles.greeting}>Olá, usuário!</Text>
        </View>
        <View style={styles.headerIcons}>
          <Image source={require('../../assets/notifications.svg')} style={styles.icon} />
          <Image source={require('../../assets/help_circle.svg')} style={styles.icon} />
        </View>
      </View>

      <TextInput style={styles.searchInput} placeholder="Pesquisar clínicas" />

      <Carousel cards={cards} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mais próximos a você</Text>
        <ScrollView horizontal>
          <ClinicCard name="Clínica A" />
          <ClinicCard name="Clínica B" />
          <ClinicCard name="Clínica C" />
          <ClinicCard name="Clínica D" />
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Todos</Text>
        <ServiceMenu name="Clínica C" address="Rua X, Cidade Y" />
        <ServiceMenu name="Clínica D" address="Rua Y, Cidade Z" />
        <ServiceMenu name="Clínica D" address="Rua Y, Cidade W" />
        <ServiceMenu name="Clínica D" address="Rua Y, Cidade X" />
        <ServiceMenu name="Clínica D" address="Rua Y, Cidade H" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, backgroundColor: '#ffffff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  icon: { width: 30, height: 30, margin: 10, color: '#000000' },
  avatar: { width: 40, height: 40, borderRadius: 20, marginEnd: 20 },
  greeting: { fontSize: 28 },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  searchInput: { marginTop: 20, marginBottom: 20, padding: 8, backgroundColor: '#f0f0f0', borderRadius: 8 },
  section: { marginVertical: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
});
