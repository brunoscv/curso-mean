'use strict';

let router = require('express').Router();
let JobController = require('../controllers/JobController');
let AuthController = require('../controllers/AuthController');

router.get('/tags', JobController.tags);
router.get('/:_id', JobController.byId);
router.get('/', JobController.list);
router.post('/', AuthController.ensureAuthenticated, JobController.create);
router.put('/:_id', AuthController.ensureAuthenticated, JobController.update);
router.delete('/:_id', AuthController.ensureAuthenticated, JobController.remove);


module.exports = router;
