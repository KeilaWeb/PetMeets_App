import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Agendamento') iconName = 'today';
          else if (route.name === 'Pesquisa') iconName = 'search';
          else if (route.name === 'Perfil') iconName = 'person';

          return (
            <View
              style={[ styles.iconContainer, focused && styles.activeContainer, ]} >
              <Ionicons name={iconName} size={size} color={color} />
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
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
          paddingHorizontal: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Agendamento" component={ScheduleScreen} />
      <Tab.Screen name="Pesquisa" component={SearchScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#F6F6F6',
    position: 'absolute',
    height: 70,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 10,
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
  },
  tabBarLabelStyle: {
    fontSize: 11,
    fontWeight: '500',
    paddingHorizontal: 10,
  },
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
    paddingBottom: 20,
  },
});