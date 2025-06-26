const router = require('express').Router();
const upload = require('../utils/upload');
const { uploadPoliza, listPolizas } = require('../controllers/polizaController');
const { authMiddleware } = require('../utils/auth');

router.post('/', authMiddleware, upload.single('file'), uploadPoliza);
router.get('/', authMiddleware, listPolizas);

module.exports = router;
