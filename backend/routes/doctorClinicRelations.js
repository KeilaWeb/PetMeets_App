const express = require('express');
const doctors = require('../data/doctors'); // Importando os dados dos médicos
const clinics = require('../data/clinics'); // Importando os dados das clínicas
const doctorClinicRelations = require('../data/doctorClinicRelations'); // Importando a relação médico-clínica

const router = express.Router();

// Relacionar Médico com Clínica
router.post('/', (req, res) => {
  const { doctorId, clinicId } = req.body;

  // Verificar se o médico existe
  const doctor = doctors.find((d) => d.id === doctorId);
  if (!doctor) return res.status(404).json({ message: 'Médico não encontrado' });

  // Verificar se a clínica existe
  const clinic = clinics.find((c) => c.id === clinicId);
  if (!clinic) return res.status(404).json({ message: 'Clínica não encontrada' });

  // Adicionar a relação
  doctorClinicRelations.push({ doctorId, clinicId });
  res.status(201).json({ message: 'Médico associado à clínica com sucesso' });
});

// Listar Médicos de uma Clínica
router.get('/clinics/:id/doctors', (req, res) => {
  const clinicId = parseInt(req.params.id, 10);

  const doctorIds = doctorClinicRelations
    .filter((relation) => relation.clinicId === clinicId)
    .map((relation) => relation.doctorId);

  const doctorsList = doctors
    .filter((doctor) => doctorIds.includes(doctor.id))
    .map((doctor) => ({
      ...doctor,
      specialties: doctor.specialties.map((id) => {
        const specialty = specialties.find((s) => s.id === id);
        return specialty ? specialty.name : "Especialidade desconhecida";
      }),
    }));

  if (doctorsList.length === 0) {
    return res.status(404).json({ message: 'Nenhum médico encontrado para esta clínica' });
  }

  res.json(doctorsList);
});


// Listar Clínicas de um Médico
router.get('/doctors/:id/clinics', (req, res) => {
  const doctorId = parseInt(req.params.id, 10);

  // Filtrar IDs das clínicas relacionadas ao médico
  const clinicIds = doctorClinicRelations
    .filter((dcr) => dcr.doctorId === doctorId)
    .map((dcr) => dcr.clinicId);

  // Buscar as clínicas correspondentes
  const clinicsList = clinics.filter((c) => clinicIds.includes(c.id));

  // Verificar se há clínicas relacionadas
  if (clinicsList.length === 0) {
    return res.status(404).json({ message: 'Nenhuma clínica encontrada para este médico' });
  }

  res.json(clinicsList);
});

module.exports = router;
