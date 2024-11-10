import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ClinicCard from '../components/ClinicCard';
import ClinicCardH from '../components/ClinicCard_h';


export default function HomeScreen() {
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

      <View style={styles.section}>
        <ScrollView horizontal>
            <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.adImage} />
            <Image source={{ uri: 'https://via.placeholder.com/150/FF0000' }} style={styles.adImage} />
            <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.adImage} />
        </ScrollView>
      </View>

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
        <ClinicCardH name="Clínica C" address="Rua X, Cidade Y" />
        <ClinicCardH name="Clínica D" address="Rua Y, Cidade Z" />
        <ClinicCardH name="Clínica D" address="Rua Y, Cidade W" />
        <ClinicCardH name="Clínica D" address="Rua Y, Cidade X" />
        <ClinicCardH name="Clínica D" address="Rua Y, Cidade H" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  icon: { width: 30, height: 30, margin: 10, color: '#000000' },
  avatar: { width: 40, height: 40, borderRadius: 20, marginEnd: 20 },
  greeting: { fontSize: 28},
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  searchInput: { marginTop: 10, padding: 8, backgroundColor: '#f0f0f0', borderRadius: 8 },
  section: { marginVertical: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  adImage: { width: 150, height: 150, borderRadius: 8, marginRight: 10 },
});
