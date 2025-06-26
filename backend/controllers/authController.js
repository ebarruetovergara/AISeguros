const User = require('../models/User');
const { generateToken } = require('../utils/auth');

async function register(req, res) {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'Usuario registrado' });
  } catch (err) {
    res.status(500).json({ message: 'Error al registrar' });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) return res.status(401).json({ message: 'Credenciales invalidas' });
    const token = generateToken();
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Error al ingresar' });
  }
}

module.exports = { register, login };
