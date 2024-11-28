import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './src/navigation/TabNavigator';
import ClinicDetailsScreen from './src/screens/ClinicDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="ClinicDetails" component={ClinicDetailsScreen} options={{ headerShown: false }} initialParams={{ clinicId: null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
