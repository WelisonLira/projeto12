// BACK-END COM NODE.JS PARA CONSULTAS SEGURAS (REVISADO E MELHORADO)

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const mongoose = require('mongoose');
const PDFDocument = require('pdfkit');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan'); // Logger para requisições

dotenv.config();

// MODELS E MIDDLEWARES
const { Pagamento, Consulta, Usuario } = require('./models/Schemas');
const authenticateJWT = require('./middlewares/authenticateJWT');
const lgpdConsent = require('./middlewares/lgpdConsent');
const consultaRoutes = require('./routes/consultaRoutes');
const resultadoRoutes = require('./routes/resultadoRoutes');
const loginRoutes = require('./routes/loginRoutes');

const app = express();

// SEGURANÇA E LOGS
app.use(helmet());
app.use(morgan('combined')); // Log detalhado das requisições

// CONFIGURAÇÃO RESTRITA DE CORS (ajuste para sua origem em produção)
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  optionsSuccessStatus: 200
}));

app.use(bodyParser.json());

// SERVE APENAS PASTA PUBLICA
app.use(express.static(path.join(__dirname, 'public')));

// CONEXÃO COM MONGODB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro MongoDB:', err));

// LIMITADOR DE REQUISIÇÕES POR IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: 'Muitas requisições deste IP, tente novamente mais tarde.'
  }
});
app.use(limiter);

// ROTAS PROTEGIDAS
app.use('/api', consultaRoutes);
app.use('/api', resultadoRoutes);
app.use('/api', loginRoutes);

// WEBHOOK DE PAGAMENTO (simulado, recomendável migrar para BD)
const pagamentosConfirmados = new Set();

app.post('/api/webhook/pagamento', (req, res) => {
  const { referencia, status } = req.body;
  // Validação de entrada
  if (typeof referencia !== "string" || typeof status !== "string") {
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  if (status === 'pago' && referencia) {
    pagamentosConfirmados.add(referencia);
    return res.status(200).json({ message: 'Pagamento confirmado com sucesso.' });
  }
  res.status(400).json({ message: 'Webhook inválido' });
});

// PDF DE COMPROVANTE
app.get('/api/comprovante/:referencia', (req, res) => {
  const { referencia } = req.params;
  // Exemplo: validando se o pagamento foi confirmado
  if (!pagamentosConfirmados.has(referencia)) {
    return res.status(404).json({ message: 'Pagamento não encontrado ou não confirmado.' });
  }
  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=comprovante.pdf');
  doc.pipe(res); // O pipe deve ser antes do end!
  doc.fontSize(18).text('Comprovante de Consulta', { align: 'center' });
  doc.moveDown();
  doc.fontSize(12).text(`Referência: ${referencia}`);
  doc.text(`Status: PAGO`);
  doc.text(`Data: ${new Date().toLocaleString()}`);
  doc.end();
});

// ROTAS INSTITUCIONAIS (arquivos agora na pasta public/institucional)
app.get('/termos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'institucional', 'termos.html'));
});
app.get('/privacidade', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'institucional', 'privacidade.html'));
});
app.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'institucional', 'sobre.html'));
});

// ROTA RAIZ
app.get('/', (req, res) => {
  res.send('API de Consulta Protegida - Online');
});

// MIDDLEWARE GLOBAL DE TRATAMENTO DE ERROS
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erro interno do servidor' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));