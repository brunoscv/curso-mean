'use strict';

let db = require('../db/mongoose');
let CompanySchema = require('../schemas/CompanySchema');

module.exports = db.model('Company', CompanySchema);
