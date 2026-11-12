const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middlewares/authenticateJWT');
const Recarga = require('../models/Recarga');

// Fail closed until a signed, idempotent payment provider webhook is implemented.
router.post('/recarga', authenticateJWT, async (req, res) => {
  return res.status(503).json({ message: 'Recargas indisponíveis: integração de pagamento não configurada.' });
});

// Histórico de recargas
router.get('/recarga/historico', authenticateJWT, async (req, res) => {
  const historico = await Recarga.find({ usuario: req.user.id }).sort({ data: -1 });
  res.json(historico);
});

module.exports = router;
