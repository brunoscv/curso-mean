'use strict';

let router = require('express').Router();
let AuthController = require('../controllers/AuthController');

router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);

module.exports = router;
