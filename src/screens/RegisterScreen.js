import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image } from 'react-native';
import { registerUser } from '../api/authService';
import logo from '../../assets/logo-petmeets.svg';
import google from '../../assets/google.svg';
import face from '../../assets/facebook.svg';
import apple from '../../assets/apple.svg';

export default function RegisterScreen({ navigation }) {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = async () => {
  
    try {
      const result = await registerUser(username, email, password);
      console.log('Registro bem-sucedido:', result);
      Alert.alert('Sucesso', result.message);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao registrar:', error);
      Alert.alert('Erro', error.message);
    }
  };
  

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.card}>

        <View style={styles.logos}>
          <Image source={google} style={styles.logolink} />
          <Image source={face} style={styles.logolink} />
          <Image source={apple} style={styles.logolink} />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUserName}
        />
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

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text onPress={() => navigation.navigate('Login')} style={styles.link}>
          Já tem uma conta? Login
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
    textAlign: 'center' },
});
