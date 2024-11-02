const express = require('express');
const router = express.Router();
const capteurController = require('../controllers/sensor.controller');

router.post('/sensor', capteurController.createCapteur);
router.get('/sensors', capteurController.getAllCapteurs);

module.exports = router;
