const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: { 
    type: String, 
    required: [true, 'O nome do produto é obrigatório'],
    trim: true,
    maxlength: [100, 'Nome não pode exceder 100 caracteres']
  },
  descricao: {
    type: String,
    trim: true,
    maxlength: [500, 'Descrição não pode exceder 500 caracteres']
  },
  cor: {
    type: String,
    trim: true
  },
  peso: {
    type: Number,
    min: [0.01, 'Peso deve ser maior que zero']
  },
  tipo: {
    type: String,
    enum: ['Eletrônico', 'Vestuário', 'Alimento', 'Móvel', 'Outros'],
    default: 'Outros'
  },
  preco: {
    type: Number,
    required: [true, 'O preço é obrigatório'],
    min: [0.01, 'Preço deve ser maior que zero']
  },
  dataCadastro: {
    type: Date,
    default: Date.now
  }
}, {
  versionKey: false // Remove o campo __v
});

module.exports = mongoose.model('Produto', produtoSchema);