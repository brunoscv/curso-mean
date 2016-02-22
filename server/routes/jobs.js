'use strict';

let router = require('express').Router();
let JobController = require('../controllers/JobController');

router.get('/tags', JobController.tags);
router.get('/:_id', JobController.byId);
router.get('/', JobController.list);
router.post('/:_id', JobController.create);
router.put('/:_id', JobController.update);
router.delete('/:_id', JobController.remove);


module.exports = router;
