const mongoose = require('mongoose');

const AuditoriaSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  acao: { type: String, required: true },
  detalhes: { type: Object },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Auditoria', AuditoriaSchema);