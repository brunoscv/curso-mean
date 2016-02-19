'use strict';

var mongoose = require('mongoose');
let JobSchema = mongoose.Schema({
  "name": String,
  "description": String,
  "remote": Boolean,
  "location": String,
  "createdAt": Date,
  "_companyId": { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  "tags": [String],
  "type": String
});

module.exports = JobSchema;
