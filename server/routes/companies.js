'use strict';

let router = require('express').Router();
let CompanyController = require('../controllers/CompanyController');
let JobController = require('../controllers/JobController');

router.get('/:_id', CompanyController.byId);
router.get('/', CompanyController.list);
router.get('/:_id/jobs', JobController.listByCompany);
router.post('/:_id', CompanyController.create);
router.put('/:_id', CompanyController.update);
router.delete('/:_id', CompanyController.remove);

module.exports = router;
