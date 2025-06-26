const mongoose = require('mongoose');

const ContactoSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  consulta: String,
  mensaje: String
});

module.exports = mongoose.model('Contacto', ContactoSchema);
