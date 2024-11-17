const clinics = [
  { id: 1, clinic: "Clínica Animal Saúde", address: "Rua das Flores, 123 - Centro" },
  { id: 2, clinic: "Pet Cuidado", address: "Av. Paulista, 500 - São Paulo" },
  { id: 3, clinic: "Vida Animal", address: "Rua Rio Grande, 45 - Moema" },
  { id: 4, clinic: "Clínica Veterinária Bem-Estar", address: "Rua Boa Vista, 89 - Salvador" },
  { id: 5, clinic: "Centro Animal", address: "Av. Atlântica, 700 - Rio de Janeiro" },
  { id: 6, clinic: "VetCare", address: "Rua do Comércio, 102 - Belo Horizonte" },
  { id: 7, clinic: "Pet Vida", address: "Av. Getúlio Vargas, 301 - Curitiba" },
  { id: 8, clinic: "Animed", address: "Rua dos Veteranos, 54 - Porto Alegre" },
];

const doctors = [
  { id: 1, name: "Dr. Roberto Oliveira", specialty: "Clínico Geral" },
  { id: 2, name: "Dra. Juliana Mendes", specialty: "Ortopedia" },
  { id: 3, name: "Dr. João Pedro", specialty: "Cardiologia" },
  { id: 4, name: "Dra. Mariana Silva", specialty: "Dermatologia" },
  { id: 5, name: "Dr. Carlos Mendes", specialty: "Neurologia" },
  { id: 6, name: "Dra. Tatiana Souza", specialty: "Cirurgia Geral" },
  { id: 7, name: "Dr. Marcos Lima", specialty: "Endocrinologia" },
  { id: 8, name: "Dr. Igor Lima", specialty: "Geriatria" },
  { id: 9, name: "Dr. Henrique Almeida", specialty: "Clínico Geral" },
  { id: 10, name: "Dra. Gabriela Mendes", specialty: "Clínico Geral" },
  { id: 11, name: "Dr. Pedro Henrique", specialty: "Cirurgia Cardíaca" },
  { id: 12, name: "Dra. Renata Medeiros", specialty: "Urologia" },
  { id: 13, name: "Dr. Igor Oliveira", specialty: "Clínico Geral" },
  { id: 14, name: "Dr. Paulo Costa", specialty: "Infectologia" },
];

// Relacionamento entre médicos e clínicas
const doctorClinicRelations = [
  // Clínicos gerais
  { doctorId: 1, clinicId: 1 },
  { doctorId: 1, clinicId: 2 },
  { doctorId: 1, clinicId: 3 },
  { doctorId: 1, clinicId: 4 },
  { doctorId: 1, clinicId: 5 },
  { doctorId: 13, clinicId: 2 },
  { doctorId: 13, clinicId: 3 },
  { doctorId: 13, clinicId: 7 },

  // Especialistas
  { doctorId: 2, clinicId: 1 },
  { doctorId: 2, clinicId: 5 },
  { doctorId: 3, clinicId: 4 },
  { doctorId: 3, clinicId: 6 },
  { doctorId: 4, clinicId: 5 },
  { doctorId: 4, clinicId: 7 },
  { doctorId: 5, clinicId: 8 },
  { doctorId: 6, clinicId: 6 },
  { doctorId: 7, clinicId: 7 },
  { doctorId: 8, clinicId: 2 },
  { doctorId: 9, clinicId: 8 },
  { doctorId: 10, clinicId: 3 },
  { doctorId: 11, clinicId: 4 },
  { doctorId: 12, clinicId: 6 },
  { doctorId: 14, clinicId: 1 },
];

module.exports = { clinics, doctors, doctorClinicRelations };
