const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models/Schemas');

// Cadastro
router.post('/register', async (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) return res.status(400).json({ message: 'Preencha e-mail e senha.' });
  const userExists = await Usuario.findOne({ email });
  if (userExists) return res.status(400).json({ message: 'E-mail já cadastrado.' });
  const hash = await bcrypt.hash(senha, 10);
  const novoUsuario = new Usuario({ email, senha: hash });
  await novoUsuario.save();
  res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
});

// Login
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const usuario = await Usuario.findOne({ email });
  if (!usuario) return res.status(400).json({ message: 'Usuário não encontrado.' });
  const match = await bcrypt.compare(senha, usuario.senha);
  if (!match) return res.status(400).json({ message: 'Senha incorreta.' });
  const token = jwt.sign({ email: usuario.email, id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '6h' });
  res.status(200).json({ token });
});

module.exports = router;