import React from 'react';
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
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Agendamento') iconName = 'today';
          else if (route.name === 'Pesquisa') iconName = 'search';
          else if (route.name === 'Perfil') iconName = 'person';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        ...tabBarOptions,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Agendamento" component={ScheduleScreen} />
      <Tab.Screen name="Pesquisa" component={SearchScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const tabBarOptions = {
  tabBarStyle: {
    backgroundColor: '#ffffff',
    paddingBottom: 3,
    paddingTop: 6,
    height: 80, 

    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  tabBarActiveTintColor: '#268596',
  tabBarInactiveTintColor: '#828282',
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: '600',
  },
};
