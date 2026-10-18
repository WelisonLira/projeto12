module.exports = (req, res, next) => {
  if (!req.body.aceitouLGPD) {
    return res.status(400).json({ message: 'É necessário aceitar a LGPD.' });
  }
  next();
};