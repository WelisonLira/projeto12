const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  preco: { type: Number, required: true },
  ativo: { type: Boolean, default: true },
  destaque: { type: Boolean, default: false },
  slug: { type: String, unique: true },
  imagem: { type: String },
  categoria: { type: String },
  landing: { type: String }
});

module.exports = mongoose.model('Produto', ProdutoSchema);