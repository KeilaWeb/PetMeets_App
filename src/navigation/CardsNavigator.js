import React from 'react';
import { createCardsNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ClinicDetailsScreen from '../screens/ClinicDetailsScreen';

const Stack = createCardsNavigator();

export default function CardsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#268596' },
        headerTintColor: '#FFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
      <Stack.Screen name="DetalhesClinica" component={ClinicDetailsScreen} options={{ title: 'Detalhes da Clínica' }} />
    </Stack.Navigator>
  );
}
