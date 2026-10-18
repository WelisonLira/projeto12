const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const rateLimiter = require('./middlewares/rateLimiter');

dotenv.config();

// Importação das rotas
const authRoutes = require('./routes/authRoutes');
const produtoRoutes = require('./routes/produtoRoutes');
const consultaRoutes = require('./routes/consultaRoutes');
const recargaRoutes = require('./routes/recargaRoutes');
const cupomRoutes = require('./routes/cupomRoutes');
const faqRoutes = require('./routes/faqRoutes');
const adminRoutes = require('./routes/adminRoutes');
const indicacaoRoutes = require('./routes/indicacaoRoutes');
const notificacaoRoutes = require('./routes/notificacaoRoutes');
const suporteRoutes = require('./routes/suporteRoutes');
const depoimentoRoutes = require('./routes/depoimentoRoutes');

const app = express();

app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  optionsSuccessStatus: 200
}));
app.use(morgan('combined'));
app.use(rateLimiter);
app.use(bodyParser.json());
app.use(express.static('public'));

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro MongoDB:', err));

// Rotas principais
app.use('/api/auth', authRoutes);
app.use('/api/produto', produtoRoutes);
app.use('/api/consulta', consultaRoutes);
app.use('/api/recarga', recargaRoutes);
app.use('/api/cupom', cupomRoutes);
app.use('/api/faq', faqRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/indicacao', indicacaoRoutes);
app.use('/api/notificacao', notificacaoRoutes);
app.use('/api/suporte', suporteRoutes);
app.use('/api/depoimento', depoimentoRoutes);

app.get('/', (req, res) => {
  res.send('API de Consultas Online - Pronta para produção!');
});

// Middleware global de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erro interno do servidor' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));