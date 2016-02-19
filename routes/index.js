'use strict';

let router = require('express').Router();
let AppController = require('../controllers/AppController');

// router.get('/', AppController.home);
router.use('/api', require('./api'));

module.exports = router;
