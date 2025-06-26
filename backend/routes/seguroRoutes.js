const router = require('express').Router();
const { listSeguros } = require('../controllers/seguroController');

router.get('/', listSeguros);

module.exports = router;
