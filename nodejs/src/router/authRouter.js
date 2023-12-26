const express = require('express');
const AuthController = require('../controller/AuthController');
const router = express.Router();

router.post('/sign-in', AuthController.login)
// router.post('/sign-up', AuthController.register)

module.exports = router;