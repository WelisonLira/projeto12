const mongoose = require('mongoose');

const ConsultaSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  produto: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto' },
  dadosConsulta: { type: Object },
  resultado: { type: Object },
  status: { type: String, default: 'pendente' }, // pendente, concluido, erro
  avaliado: { type: Boolean, default: false },
  nota: { type: Number, min: 1, max: 5 },
  comentario: { type: String },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Consulta', ConsultaSchema);