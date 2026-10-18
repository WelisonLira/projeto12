const mongoose = require('mongoose');

const TicketSuporteSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  mensagem: { type: String, required: true },
  status: { type: String, default: 'aberto' }, // aberto, respondido, fechado
  resposta: { type: String },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TicketSuporte', TicketSuporteSchema);