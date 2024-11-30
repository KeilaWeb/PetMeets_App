const express = require('express');
const doctors = require('../data/doctors'); // Importa os dados reais dos médicos

const router = express.Router();

// Listar todos os médicos
router.get('/', (req, res) => res.json(doctors));

// Criar um novo médico
router.post('/', (req, res) => {
  const newDoctor = { id: doctors.length + 1, ...req.body }; 
  doctors.push(newDoctor); 
  res.status(201).json(newDoctor); 
});

// Obter um médico específico por ID
router.get('/:id', (req, res) => {
  const doctor = doctors.find((d) => d.id === parseInt(req.params.id, 10));
  if (!doctor) return res.status(404).json({ message: 'Médico não encontrado' });
  res.json(doctor);
});

// Atualizar um médico por ID
router.put('/:id', (req, res) => {
  const doctorIndex = doctors.findIndex((d) => d.id === parseInt(req.params.id, 10));
  if (doctorIndex === -1) return res.status(404).json({ message: 'Médico não encontrado' });

  doctors[doctorIndex] = { ...doctors[doctorIndex], ...req.body };
  res.json(doctors[doctorIndex]);
});

// Excluir um médico por ID
router.delete('/:id', (req, res) => {
  const doctorIndex = doctors.findIndex((d) => d.id === parseInt(req.params.id, 10));
  if (doctorIndex === -1) return res.status(404).json({ message: 'Médico não encontrado' });

  const deleted = doctors.splice(doctorIndex, 1);
  res.json(deleted[0]);
});

module.exports = router;
