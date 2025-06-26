function authMiddleware(req, res, next) {
  const token = req.headers['authorization'];
  if (token === 'fake-token') {
    next();
  } else {
    res.status(401).json({ message: 'No autorizado' });
  }
}

function generateToken() {
  return 'fake-token';
}

module.exports = { authMiddleware, generateToken };
