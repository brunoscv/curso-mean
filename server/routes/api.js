'use strict';

let router = require('express').Router();

router.get('/', function(request, response, next) {
  response.json({
  	error: false,
  	message: "Job Search API"
  });
});

router.use('/companies', require('./companies'));
router.use('/jobs', require('./jobs'));

module.exports = router;
