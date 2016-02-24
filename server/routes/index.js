'use strict';

let router = require('express').Router();
let AppController = require('../controllers/AppController');

// router.get('/', AppController.home);
router.use('/api', require('./api'));
router.use('/auth', require('./auth'));

module.exports = router;
