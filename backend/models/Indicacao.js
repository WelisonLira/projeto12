const mongoose = require('mongoose');

const IndicacaoSchema = new mongoose.Schema({
  usuarioIndicador: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  usuarioIndicado: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  recompensa: { type: Number, default: 0 },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Indicacao', IndicacaoSchema);