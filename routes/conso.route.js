const express = require('express');
const router = express.Router();
const consommationController = require('../controllers/conso.controller');

router.post('/conso', consommationController.createConsommation);
router.get('/conso', consommationController.getAllConsommations);

module.exports = router;
