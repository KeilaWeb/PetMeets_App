import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; // Importa FontAwesome para hospital e doctor

import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import SearchScreen from '../screens/SearchScreen';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconComponent;

          if (route.name === 'Home') {
            iconComponent = <Ionicons name="home" size={size} color={color} />;
          } else if (route.name === 'Clinicas') {
            iconComponent = (
              <FontAwesome name="hospital-o" size={size} color={color} />
            ); // Ícone de hospital
          } else if (route.name === 'Medicos') {
            iconComponent = (
              <FontAwesome name="user-md" size={size} color={color} />
            ); // Ícone de médico
          } else if (route.name === 'Perfil') {
            iconComponent = <Ionicons name="person" size={size} color={color} />;
          }

          return (
            <View style={[styles.iconContainer, focused && styles.activeContainer]}>
              {iconComponent}
            </View>
          );
        },
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#496783',
        tabBarStyle: {
          backgroundColor: '#F6F6F6',
          position: 'absolute',
          height: 70,
          borderTopEndRadius: 30,
          borderTopLeftRadius: 30,
          elevation: 10,
          boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
          paddingHorizontal: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Clinicas" component={ScheduleScreen} />
      <Tab.Screen name="Medicos" component={SearchScreen} />
      <Tab.Screen name="Perfil" component={LoginScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 28,
    backgroundColor: 'transparent',
  },
  activeContainer: {
    backgroundColor: '#268596',
    borderRadius: 10,
    borderTopLeftRadius: 40,
    borderTopEndRadius: 40,
    paddingBottom: 25,
  },
});
