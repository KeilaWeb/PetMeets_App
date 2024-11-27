import React from 'react';

import HomeScreen from '../screens/HomeScreen';
import ClinicDetailsScreen from '../screens/ClinicDetailsScreen';

const Stack = createStackNavigator();

export default function CardsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#268596' },
        headerTintColor: '#FFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
      <Tab.Screen name="ClinicDetails" component={ClinicDetailsScreen} options={{ title: 'Detalhes da Clínica' }} />
    </Tab.Navigator>
  );
}
