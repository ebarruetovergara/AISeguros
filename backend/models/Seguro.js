const mongoose = require('mongoose');

const SeguroSchema = new mongoose.Schema({
  tipo: String,
  precio: Number,
  cobertura: String
});

module.exports = mongoose.model('Seguro', SeguroSchema);
