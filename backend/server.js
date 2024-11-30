const express = require('express');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/auth');
const clinicsRoutes = require('./routes/clinics');
const doctorsRoutes = require('./routes/doctors');
const doctorClinicRoutes = require('./routes/doctorClinicRelations');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, '../assets')));

// Rotas
app.use('/auth', authRoutes);
app.use('/clinics', clinicsRoutes);
app.use('/doctors', doctorsRoutes);
app.use('/doctor-clinic', doctorClinicRoutes);

// Verificação de saúde
app.get('/health', (req, res) => res.status(200).json({ message: 'Servidor está funcionando!' }));

// Inicialização do servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
