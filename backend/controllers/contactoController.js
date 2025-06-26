const Contacto = require('../models/Contacto');

async function enviarMensaje(req, res) {
  const { nombre, correo, consulta, mensaje } = req.body;
  try {
    const nuevo = new Contacto({ nombre, correo, consulta, mensaje });
    await nuevo.save();
    res.status(201).json({ message: 'Mensaje recibido' });
  } catch (err) {
    res.status(500).json({ message: 'Error al guardar mensaje' });
  }
}

module.exports = { enviarMensaje };
