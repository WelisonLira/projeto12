const Auditoria = require('../models/Auditoria');
module.exports = async (req, res, next) => {
  // Salva log de auditoria importante, como login, recarga, consulta, etc.
  if (req.user && req.auditoriaAcao) {
    await Auditoria.create({
      usuario: req.user.id,
      acao: req.auditoriaAcao,
      detalhes: req.auditoriaDetalhes || {}
    });
  }
  next();
};