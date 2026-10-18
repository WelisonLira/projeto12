const mongoose = require('mongoose');

const FAQSchema = new mongoose.Schema({
  pergunta: { type: String, required: true },
  resposta: { type: String, required: true },
  ordem: { type: Number, default: 0 }
});

module.exports = mongoose.model('FAQ', FAQSchema);