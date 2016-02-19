'use strict';

let db = require('../db/mongoose');
let JobSchema = require('../schemas/JobSchema');

module.exports = db.model('Job', JobSchema);
