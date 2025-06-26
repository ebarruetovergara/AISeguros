const router = require('express').Router();
const { enviarMensaje } = require('../controllers/contactoController');

router.post('/', enviarMensaje);

module.exports = router;
