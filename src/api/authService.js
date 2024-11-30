import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://localhost:3000';

export const loginUser = async (email, password) => {
  try {
    console.log('Tentando login com:', { email, password });
    const response = await fetch(`${BASE_URL}/auth/login`,  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    console.log('Resposta do servidor:', response.status, response.statusText);

    if (!response.ok) {
      const errorData = await response.json();
      console.log('Erro retornado pelo backend:', errorData);
      throw new Error(errorData.message || 'Erro ao fazer login.');
    }

    const data = await response.json();
    console.log('Login bem-sucedido:', data);

    await AsyncStorage.setItem('userToken', data.token);
    return data;
  } catch (error) {
    throw new Error(error.message || 'Erro inesperado.');
  }
};

export const registerUser = async (username, email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erro ao registrar usuário.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message || 'Erro inesperado.');
  }
};
