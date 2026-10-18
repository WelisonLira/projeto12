const mongoose = require('mongoose');

const NotificacaoSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  titulo: { type: String },
  mensagem: { type: String },
  lida: { type: Boolean, default: false },
  tipo: { type: String }, // ex: email, push, sms, whatsapp
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notificacao', NotificacaoSchema);