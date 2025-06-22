const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Loja Franca - CRUD de Produtos',
      version: '1.0.0',
      description: 'Documentação completa para o trabalho de Back-End',
    },
    servers: [
      { url: 'http://localhost:3000/api', description: 'Servidor local' },
      { url: 'https://sua-api.onrender.com/api', description: 'Produção' }
    ],
    components: {
      schemas: {
        Produto: {
          type: 'object',
          required: ['nome', 'preco'],
          properties: {
            _id: { type: 'string', example: '64a12b5c3d1e8f9c12345678' },
            nome: { type: 'string', example: 'Notebook Dell' },
            descricao: { type: 'string', example: 'Core i7, 16GB RAM' },
            cor: { type: 'string', example: 'Prata' },
            peso: { type: 'number', example: 1.5 },
            tipo: { 
              type: 'string', 
              enum: ['Eletrônico', 'Vestuário', 'Alimento', 'Móvel', 'Outros'],
              example: 'Eletrônico'
            },
            preco: { type: 'number', example: 4500.99 },
            dataCadastro: { type: 'string', format: 'date-time', example: '2023-07-01T12:00:00Z' }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js']
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
    customSiteTitle: "Loja Franca API Docs",
    customCss: '.swagger-ui .topbar { display: none }'
  }));
};