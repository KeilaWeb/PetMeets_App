import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const getClinics = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/clinics`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar clínicas:', error);
    throw error;
  }
};

export const getDoctors = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/doctors`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar médicos:', error);
    throw error;
  }
};

export const getDoctorsClinic = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/doctor-clinic/`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar médicos da clínica:', error);
    throw error;
  }
};

export const getDoctorsByClinic = async (clinicId) => {
  try {
    const response = await axios.get(`${BASE_URL}/doctor-clinic/clinics/${clinicId}/doctors`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar médicos da clínica:', error);
    throw error;
  }
};