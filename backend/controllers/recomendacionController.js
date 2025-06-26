const seguros = require('../utils/mockSeguros');

function obtenerRecomendaciones(req, res) {
  const { edad, tipo } = req.body;
  let results = seguros;
  if (tipo) results = results.filter(s => s.tipo === tipo);
  res.json(results.slice(0, 3));
}

module.exports = { obtenerRecomendaciones };
