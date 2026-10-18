const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middlewares/authenticateJWT');
const Consulta = require('../models/Consulta');
const Produto = require('../models/Produto');
const Usuario = require('../models/Usuario');

// Realizar consulta (simulação, integração real depois)
router.post('/consulta', authenticateJWT, async (req, res) => {
  const { produtoId, dadosConsulta } = req.body;
  const produto = await Produto.findById(produtoId);
  if (!produto) return res.status(404).json({ message: 'Produto não encontrado.' });
  const usuario = await Usuario.findById(req.user.id);
  if (usuario.saldo < produto.preco) return res.status(400).json({ message: 'Saldo insuficiente.' });
  // Debita saldo
  usuario.saldo -= produto.preco;
  await usuario.save();
  // Simula consulta (resultado fictício)
  const resultado = { sucesso: true, detalhes: 'Consulta realizada com sucesso!' };
  const consulta = new Consulta({ usuario: usuario._id, produto: produto._id, dadosConsulta, resultado, status: 'concluido' });
  await consulta.save();
  res.json({ consultaId: consulta._id, resultado });
});

// Histórico de consultas
router.get('/consulta/historico', authenticateJWT, async (req, res) => {
  const historico = await Consulta.find({ usuario: req.user.id }).populate('produto').sort({ data: -1 });
  res.json(historico);
});

module.exports = router;