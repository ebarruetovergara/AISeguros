const Poliza = require('../models/Poliza');

async function uploadPoliza(req, res) {
  try {
    const poliza = new Poliza({
      userId: req.userId || null,
      filename: req.file.filename,
      originalname: req.file.originalname
    });
    await poliza.save();
    res.status(201).json(poliza);
  } catch (err) {
    res.status(500).json({ message: 'Error al subir' });
  }
}

async function listPolizas(req, res) {
  try {
    const polizas = await Poliza.find({});
    res.json(polizas);
  } catch (err) {
    res.status(500).json({ message: 'Error al listar' });
  }
}

module.exports = { uploadPoliza, listPolizas };
