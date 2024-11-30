const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();
const users = [];

// Função para gerar token com uma chave secreta de variável de ambiente
const generateToken = (user) =>
  jwt.sign({ id: user.email }, process.env.JWT_SECRET || 'default_secret', { expiresIn: '1h' });

// Registrar usuário
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  if (users.find((u) => u.email === email)) {
    return res.status(400).json({ message: 'E-mail já registrado.' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, email, password: hashedPassword });

  res.status(201).json({ message: 'Usuário registrado com sucesso!' });
});

// Login
router.post('/login', async (req, res) => {
  console.log('Dados recebidos no login:', req.body);
  const { email, password } = req.body;

  console.log('Dados recebidos:', { email, password });
  const user = users.find((u) => u.email === email);

  console.log('Usuário encontrado:', user);

  if (!email || !password) {
    return res.status(400).json({ message: 'Email ou senha ausentes.' });
  }

  const token = generateToken(user);
  console.log('Login bem-sucedido, token gerado:', token);
  res.json({ message: 'Login bem-sucedido!', token });
});

module.exports = router;
