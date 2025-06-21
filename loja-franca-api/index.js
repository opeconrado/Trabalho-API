require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const produtoRoutes = require('./routes/produtoRoutes');
const setupSwagger = require('./swagger/swaggerConfig');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado ao MongoDB Atlas'))
  .catch(err => console.error('Erro na conexão:', err));

// Rotas
app.use('/api/produtos', produtoRoutes);

// Swagger Documentation
setupSwagger(app);

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Documentação disponível em: http://localhost:${PORT}/api-docs`);
});