const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  saldo: { type: Number, default: 0 },
  aceitouLGPD: { type: Boolean, default: false },
  nome: { type: String },
  telefone: { type: String },
  admin: { type: Boolean, default: false },
  googleId: { type: String },
  facebookId: { type: String },
  appleId: { type: String },
  indicadoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  notificacoes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Notificacao' }],
  doisFatoresAtivo: { type: Boolean, default: false },
  doisFatoresCodigo: { type: String },
  dataCadastro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);