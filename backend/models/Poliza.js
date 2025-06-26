const mongoose = require('mongoose');

const PolizaSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  filename: String,
  originalname: String
});

module.exports = mongoose.model('Poliza', PolizaSchema);
