const router = require('express').Router();

router.use(require('./authRoutes'));
router.use('/seguros', require('./seguroRoutes'));
router.use('/recomendaciones', require('./recomendacionRoutes'));
router.use('/polizas', require('./polizaRoutes'));
router.use('/contacto', require('./contactoRoutes'));

router.get('/ping', (req, res) => res.send('pong'));

module.exports = router;
