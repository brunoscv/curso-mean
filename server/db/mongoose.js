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
  var username = process.env.MONGO_USERNAME || config.get('mongo.username'),
      password = process.env.MONGO_PASSWORD || config.get('mongo.password'),
      host     = process.env.MONGO_SERVER 	|| config.get('mongo.host'),
      port     = process.env.MONGO_PORT 	|| config.get('mongo.port'),
      database = process.env.MONGO_DATABASE || config.get('mongo.database'),

      auth = username ? username + ':' + password + '@' : '';

  return 'mongodb://' + auth + host + ':' + port + '/' + database;
};
