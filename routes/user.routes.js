const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/signup', userController.createUser);
router.post('/signin', userController.userLogin);


module.exports = router;
