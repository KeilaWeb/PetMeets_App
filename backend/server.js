const express = require('express');
const cors = require('cors');
const clinicsData = require('./data');
const app = express();

app.use(cors());
app.use(express.json());

// Simula um banco de dados em memória
let clinics = [...clinicsData];

app.get('/clinics/nearby', (req, res) => {
  const nearbyClinics = clinics.filter(c => c.address.includes('São Paulo')); 
  res.json(nearbyClinics);
});


// Rotas CRUD
app.get('/clinics', (req, res) => res.json(clinics));

app.post('/clinics', (req, res) => {
  const newClinic = { id: clinics.length + 1, ...req.body };
  clinics.push(newClinic);
  res.status(201).json(newClinic);
});

app.get('/clinics/:id', (req, res) => {
  const clinic = clinics.find(c => c.id === parseInt(req.params.id, 10));
  if (!clinic) return res.status(404).json({ message: "Clínica não encontrada" });
  res.json(clinic);
});

app.put('/clinics/:id', (req, res) => {
  const clinicIndex = clinics.findIndex(c => c.id === parseInt(req.params.id, 10));
  if (clinicIndex === -1) return res.status(404).json({ message: "Clínica não encontrada" });
  clinics[clinicIndex] = { ...clinics[clinicIndex], ...req.body };
  res.json(clinics[clinicIndex]);
});

app.delete('/clinics/:id', (req, res) => {
  const clinicIndex = clinics.findIndex(c => c.id === parseInt(req.params.id, 10));
  if (clinicIndex === -1) return res.status(404).json({ message: "Clínica não encontrada" });
  const deleted = clinics.splice(clinicIndex, 1);
  res.json(deleted[0]);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
