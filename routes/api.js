'use strict';

let router = require('express').Router();

router.get('/', function(request, response, next) {
  response.send('PONG');
});

router.use('/companies', require('./companies'));
router.use('/jobs', require('./jobs'));

module.exports = router;
