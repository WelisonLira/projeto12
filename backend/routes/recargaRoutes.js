const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middlewares/authenticateJWT');
const Recarga = require('../models/Recarga');
const Usuario = require('../models/Usuario');

// Simulação de recarga (integração pagamento real depois)
router.post('/recarga', authenticateJWT, async (req, res) => {
  const { valor } = req.body;
  if (!valor || valor <= 0) return res.status(400).json({ message: 'Valor inválido.' });
  // Aqui entraria a integração com a API de pagamento real
  const recarga = new Recarga({ usuario: req.user.id, valor, status: 'aprovado' });
  await recarga.save();
  // Credita saldo ao usuário
  await Usuario.findByIdAndUpdate(req.user.id, { $inc: { saldo: valor } });
  res.json({ message: 'Recarga realizada com sucesso!', saldo: valor });
});

// Histórico de recargas
router.get('/recarga/historico', authenticateJWT, async (req, res) => {
  const historico = await Recarga.find({ usuario: req.user.id }).sort({ data: -1 });
  res.json(historico);
});

module.exports = router;