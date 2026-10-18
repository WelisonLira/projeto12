const mongoose = require('mongoose');

const CupomSchema = new mongoose.Schema({
  codigo: { type: String, required: true, unique: true },
  valor: { type: Number, required: true },
  tipo: { type: String, enum: ['fixo', 'percentual'], default: 'fixo' },
  limiteUso: { type: Number, default: 1 },
  usado: { type: Number, default: 0 },
  expiracao: { type: Date },
  ativo: { type: Boolean, default: true }
});

module.exports = mongoose.model('Cupom', CupomSchema);