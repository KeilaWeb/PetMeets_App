const express = require('express');
const cors = require('cors');
const app = express();

// Configurar middleware
app.use(cors());
app.use(express.json());

// Dados simulados (simula um banco de dados)
const clinics = [
    [
        {
          "id": 1,
          "clinic_name": "Clínica Animal Saúde",
          "specialist_name": "Dra. Ana Lima",
          "address": "Rua das Flores, 123 - Centro",
          "doctor_name": "Dr. Roberto Oliveira",
          "specialty": "Ortopedia",
          "logo": "https://example.com/logos/clinic1.png"
        },
        {
          "id": 2,
          "clinic_name": "Pet Cuidado",
          "specialist_name": "Dr. Felipe Souza",
          "address": "Av. Paulista, 500 - São Paulo",
          "doctor_name": "Dra. Juliana Mendes",
          "specialty": "Cardiologia",
          "logo": "https://example.com/logos/clinic2.png"
        },
        {
          "id": 3,
          "clinic_name": "Vida Animal",
          "specialist_name": "Dra. Camila Gonçalves",
          "address": "Rua Rio Grande, 45 - Moema",
          "doctor_name": "Dr. João Pedro",
          "specialty": "Dermatologia",
          "logo": "https://example.com/logos/clinic3.png"
        },
        {
          "id": 4,
          "clinic_name": "Clínica Veterinária Bem-Estar",
          "specialist_name": "Dr. Rodrigo Moreira",
          "address": "Rua Boa Vista, 89 - Salvador",
          "doctor_name": "Dra. Mariana Silva",
          "specialty": "Oftalmologia",
          "logo": "https://example.com/logos/clinic4.png"
        },
        {
          "id": 5,
          "clinic_name": "Centro Animal",
          "specialist_name": "Dra. Paula Almeida",
          "address": "Av. Atlântica, 700 - Rio de Janeiro",
          "doctor_name": "Dr. Carlos Mendes",
          "specialty": "Cirurgia Geral",
          "logo": "https://example.com/logos/clinic5.png"
        },
        {
          "id": 6,
          "clinic_name": "VetCare",
          "specialist_name": "Dr. Bruno Santos",
          "address": "Rua do Comércio, 102 - Belo Horizonte",
          "doctor_name": "Dra. Tatiana Souza",
          "specialty": "Neurologia",
          "logo": "https://example.com/logos/clinic6.png"
        },
        {
          "id": 7,
          "clinic_name": "Pet Vida",
          "specialist_name": "Dra. Carla Ramos",
          "address": "Av. Getúlio Vargas, 301 - Curitiba",
          "doctor_name": "Dr. Marcos Lima",
          "specialty": "Endocrinologia",
          "logo": "https://example.com/logos/clinic7.png"
        },
        {
          "id": 8,
          "clinic_name": "Animed",
          "specialist_name": "Dr. Fernando Lopes",
          "address": "Rua dos Veteranos, 54 - Porto Alegre",
          "doctor_name": "Dra. Gabriela Mendes",
          "specialty": "Oncologia",
          "logo": "https://example.com/logos/clinic8.png"
        },
        {
          "id": 9,
          "clinic_name": "Pet Expert",
          "specialist_name": "Dra. Larissa Silva",
          "address": "Av. Independência, 450 - Recife",
          "doctor_name": "Dr. Rafael Barbosa",
          "specialty": "Odontologia",
          "logo": "https://example.com/logos/clinic9.png"
        },
        {
          "id": 10,
          "clinic_name": "Veterinária Total",
          "specialist_name": "Dr. Diego Costa",
          "address": "Rua Tranquilidade, 89 - Natal",
          "doctor_name": "Dra. Beatriz Santana",
          "specialty": "Nefrologia",
          "logo": "https://example.com/logos/clinic10.png"
        },
        {
          "id": 11,
          "clinic_name": "PetLife",
          "specialist_name": "Dra. Fernanda Carvalho",
          "address": "Av. Brasil, 785 - Fortaleza",
          "doctor_name": "Dr. Igor Lima",
          "specialty": "Urologia",
          "logo": "https://example.com/logos/clinic11.png"
        },
        {
          "id": 12,
          "clinic_name": "Clínica Animal Plus",
          "specialist_name": "Dr. Alexandre Monteiro",
          "address": "Rua dos Pinheiros, 112 - São Paulo",
          "doctor_name": "Dra. Sara Freitas",
          "specialty": "Radiologia",
          "logo": "https://example.com/logos/clinic12.png"
        },
        {
          "id": 13,
          "clinic_name": "Bem-estar Animal",
          "specialist_name": "Dra. Joana Costa",
          "address": "Av. das Américas, 1230 - Rio de Janeiro",
          "doctor_name": "Dr. Pedro Henrique",
          "specialty": "Geriatria",
          "logo": "https://example.com/logos/clinic13.png"
        },
        {
          "id": 14,
          "clinic_name": "SOS Pet",
          "specialist_name": "Dr. Lucas Santana",
          "address": "Rua da Paz, 214 - São Luís",
          "doctor_name": "Dra. Renata Medeiros",
          "specialty": "Exóticos",
          "logo": "https://example.com/logos/clinic14.png"
        },
        {
          "id": 15,
          "clinic_name": "Animal Sorriso",
          "specialist_name": "Dra. Priscila Ribeiro",
          "address": "Av. Leste, 56 - Teresina",
          "doctor_name": "Dr. Thiago Fonseca",
          "specialty": "Fisioterapia",
          "logo": "https://example.com/logos/clinic15.png"
        },
        {
          "id": 16,
          "clinic_name": "PetCare Pro",
          "specialist_name": "Dr. Leonardo Azevedo",
          "address": "Rua Sul, 89 - João Pessoa",
          "doctor_name": "Dra. Alessandra Moraes",
          "specialty": "Dermatologia",
          "logo": "https://example.com/logos/clinic16.png"
        },
        {
          "id": 17,
          "clinic_name": "VetPrime",
          "specialist_name": "Dra. Marcela Cruz",
          "address": "Av. Central, 452 - Manaus",
          "doctor_name": "Dr. Henrique Almeida",
          "specialty": "Cirurgia Cardíaca",
          "logo": "https://example.com/logos/clinic17.png"
        },
        {
          "id": 18,
          "clinic_name": "Animal Saúde+",
          "specialist_name": "Dr. Gustavo Andrade",
          "address": "Rua da Esperança, 77 - Campo Grande",
          "doctor_name": "Dra. Paula Lopes",
          "specialty": "Infectologia",
          "logo": "https://example.com/logos/clinic18.png"
        },
        {
          "id": 19,
          "clinic_name": "Cuidado Pet",
          "specialist_name": "Dra. Letícia Costa",
          "address": "Av. das Flores, 210 - Belém",
          "doctor_name": "Dr. Rafael Diniz",
          "specialty": "Oncologia",
          "logo": "https://example.com/logos/clinic19.png"
        },
        {
          "id": 20,
          "clinic_name": "Amor Animal",
          "specialist_name": "Dr. Vinicius Almeida",
          "address": "Rua Alegre, 200 - Florianópolis",
          "doctor_name": "Dra. Luana Araújo",
          "specialty": "Oftalmologia",
          "logo": "https://example.com/logos/clinic20.png"
        }
      ]      
];

// Rota para obter todas as clínicas
app.get('/clinics', (req, res) => {
  res.json(clinics);
});

// Inicializar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
