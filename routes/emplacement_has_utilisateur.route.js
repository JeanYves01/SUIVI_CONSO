const express = require('express');
const router = express.Router();
const emplacementHasUtilisateurController = require('../controllers/emplacement_has_utilisateur.controller');

router.post('/link', emplacementHasUtilisateurController.createLink);
router.get('/links', emplacementHasUtilisateurController.getAllLinks);

module.exports = router;
