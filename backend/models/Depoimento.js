const mongoose = require('mongoose');

const DepoimentoSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  texto: { type: String, required: true },
  nota: { type: Number, min: 1, max: 5, required: true },
  aprovado: { type: Boolean, default: false },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Depoimento', DepoimentoSchema);