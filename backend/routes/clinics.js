const express = require('express');
const clinics = require('../data/clinics'); // Importa os dados reais das clínicas

const router = express.Router();

// Listar todas as clínicas
router.get('/', (req, res) => res.json(clinics));

// Criar uma nova clínica
router.post('/', (req, res) => {
  const newClinic = { id: clinics.length + 1, ...req.body };
  clinics.push(newClinic); 
  res.status(201).json(newClinic); 
});

// Obter uma clínica específica por ID
router.get('/:id', (req, res) => {
  const clinic = clinics.find((c) => c.id === parseInt(req.params.id, 10));
  if (!clinic) return res.status(404).json({ message: 'Clínica não encontrada' }); 
  res.json(clinic);
});

// Atualizar uma clínica por ID
router.put('/:id', (req, res) => {
  const clinicIndex = clinics.findIndex((c) => c.id === parseInt(req.params.id, 10));
  if (clinicIndex === -1) return res.status(404).json({ message: 'Clínica não encontrada' });

  clinics[clinicIndex] = { ...clinics[clinicIndex], ...req.body };
  res.json(clinics[clinicIndex]);
});

// Excluir uma clínica por ID
router.delete('/:id', (req, res) => {
  const clinicIndex = clinics.findIndex((c) => c.id === parseInt(req.params.id, 10));
  if (clinicIndex === -1) return res.status(404).json({ message: 'Clínica não encontrada' }); 

  const deleted = clinics.splice(clinicIndex, 1);
  res.json(deleted[0]); 
});

module.exports = router;
