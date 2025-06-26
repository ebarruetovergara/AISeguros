const seguros = require('../utils/mockSeguros');

function listSeguros(req, res) {
  let results = seguros;
  const { tipo, precio, cobertura } = req.query;
  if (tipo) results = results.filter(s => s.tipo === tipo);
  if (precio) results = results.filter(s => s.precio <= Number(precio));
  if (cobertura) results = results.filter(s => s.cobertura === cobertura);
  res.json(results);
}

module.exports = { listSeguros };
