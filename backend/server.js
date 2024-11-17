const express = require('express');
const cors = require('cors');
const { clinics, doctors, doctorClinicRelations } = require('./data'); // Atualizando a importação para os novos dados
const app = express();

app.use(cors());
app.use(express.json());

// Rotas para Clínicas
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

// Rotas para Médicos
app.get('/doctors', (req, res) => res.json(doctors));

app.post('/doctors', (req, res) => {
  const newDoctor = { id: doctors.length + 1, ...req.body };
  doctors.push(newDoctor);
  res.status(201).json(newDoctor);
});

app.get('/doctors/:id', (req, res) => {
  const doctor = doctors.find(d => d.id === parseInt(req.params.id, 10));
  if (!doctor) return res.status(404).json({ message: "Médico não encontrado" });
  res.json(doctor);
});

app.put('/doctors/:id', (req, res) => {
  const doctorIndex = doctors.findIndex(d => d.id === parseInt(req.params.id, 10));
  if (doctorIndex === -1) return res.status(404).json({ message: "Médico não encontrado" });
  doctors[doctorIndex] = { ...doctors[doctorIndex], ...req.body };
  res.json(doctors[doctorIndex]);
});

app.delete('/doctors/:id', (req, res) => {
  const doctorIndex = doctors.findIndex(d => d.id === parseInt(req.params.id, 10));
  if (doctorIndex === -1) return res.status(404).json({ message: "Médico não encontrado" });
  const deleted = doctors.splice(doctorIndex, 1);
  res.json(deleted[0]);
});

// Relacionar Médico com Clínica
app.post('/doctor-clinic', (req, res) => {
  const { doctorId, clinicId } = req.body;
  if (!doctors.find(d => d.id === doctorId)) return res.status(404).json({ message: "Médico não encontrado" });
  if (!clinics.find(c => c.id === clinicId)) return res.status(404).json({ message: "Clínica não encontrada" });

  doctorClinicRelations.push({ doctorId, clinicId });
  res.status(201).json({ message: "Médico associado à clínica com sucesso" });
});

// Listar Médicos de uma Clínica
app.get('/clinics/:id/doctors', (req, res) => {
  const clinicId = parseInt(req.params.id, 10);
  const doctorIds = doctorClinicRelations.filter(dcr => dcr.clinicId === clinicId).map(dcr => dcr.doctorId);
  const doctorsList = doctors.filter(d => doctorIds.includes(d.id));

  if (doctorsList.length === 0) return res.status(404).json({ message: "Nenhum médico encontrado para esta clínica" });
  res.json(doctorsList);
});

// Listar Clínicas de um Médico
app.get('/doctors/:id/clinics', (req, res) => {
  const doctorId = parseInt(req.params.id, 10);
  const clinicIds = doctorClinicRelations.filter(dcr => dcr.doctorId === doctorId).map(dcr => dcr.clinicId);
  const clinicsList = clinics.filter(c => clinicIds.includes(c.id));

  if (clinicsList.length === 0) return res.status(404).json({ message: "Nenhuma clínica encontrada para este médico" });
  res.json(clinicsList);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
