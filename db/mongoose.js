'use strict';

let mongoose = require('mongoose');
let debug = require('debug')('curso-mean:db:mongoose');
let config = require('config');

let db = mongoose.connect(_connection());


module.exports = db;

/**
 * private
 */
function _connection() {
  var username = config.get('mongo.username'),
      password = config.get('mongo.password'),
      host     = config.get('mongo.host'),
      port     = config.get('mongo.port'),
      database = config.get('mongo.database'),

      auth = username ? username + ':' + password + '@' : '';

  return 'mongodb://' + auth + host + ':' + port + '/' + database;
};
