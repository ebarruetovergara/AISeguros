const router = require('express').Router();
const { obtenerRecomendaciones } = require('../controllers/recomendacionController');

router.post('/', obtenerRecomendaciones);

module.exports = router;
