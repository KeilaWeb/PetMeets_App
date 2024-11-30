import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image } from 'react-native';
import React, { useState } from 'react';

import { loginUser } from '../api/authService';
import logo from '../../assets/logo-petmeets.svg';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const result = await loginUser(email, password);
      console.log('Login bem-sucedido:', result);
      Alert.alert('Sucesso', result.message);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      const errorMessage =
        error.response?.data?.message || 'Erro inesperado. Tente novamente.';
      Alert.alert('Erro', errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text
          onPress={() => navigation.navigate('Register')}
          style={styles.link}
        >
          Não tem conta? Registre-se
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#e3f9ff',
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },  
  logos: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logolink: {
    alignItems: 'center',
    width: 30, 
    height: 30, 
    marginHorizontal: 3,
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#F6F6F6',
    paddingVertical: 50,
    width: 350,
    paddingHorizontal: 30,
    borderRadius: 20,
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    alignItems: 'center',
    width: 80, 
    height: 80, 
    marginBottom: 40, 
  },
  button: {
    backgroundColor: '#268596', 
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 14,
    marginBottom: 15,
    padding: 10,
  },
  
  link: { 
    color: '#268596', 
    marginTop: 10, 
    textAlign: 'center',
  },
});
