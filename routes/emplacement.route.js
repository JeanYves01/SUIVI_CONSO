const express = require('express');
const router = express.Router();
const emplacementController = require('../controllers/emplacement.controller');

router.post('/emplacement', emplacementController.createEmplacement);
router.get('/emplacements', emplacementController.getAllEmplacements);

module.exports = router;
