const express = require('express');
const router = express.Router();
const Produto = require('../models/Produto');

// Lista todos os produtos (consultas)
router.get('/produtos', async (req, res) => {
  const produtos = await Produto.find({ ativo: true });
  res.json(produtos);
});

module.exports = router;