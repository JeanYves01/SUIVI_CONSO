const express = require('express');
const router = express.Router();
const alerteController = require('../controllers/alerte.controller');

router.post('/alerte', alerteController.createAlerte);
router.get('/alertes', alerteController.getAllAlertes);

module.exports = router;
