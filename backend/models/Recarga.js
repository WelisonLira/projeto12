const mongoose = require('mongoose');

const RecargaSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  valor: { type: Number, required: true },
  status: { type: String, default: 'pendente' }, // pendente, aprovado, cancelado
  transacaoId: { type: String },
  gateway: { type: String }, // ex: 'mercadopago', 'stripe'
  cupom: { type: mongoose.Schema.Types.ObjectId, ref: 'Cupom' },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recarga', RecargaSchema);