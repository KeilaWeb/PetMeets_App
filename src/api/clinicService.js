import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Atualize para o IP local ou domínio, se necessário

export const getClinics = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/clinics`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar clínicas:', error);
    throw error;
  }
};
