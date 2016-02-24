'use strict';

let CompanyModel = Promise.promisifyAll(require('../models/CompanyModel'));
let debug = require('debug')('curso-mean:controller:auth');
let config = require('config');
let moment = require('moment');
let jwt = require('jwt-simple');


let AuthController = {
  login: function(request, response, next) {
    let email = request.body.email;
    let password = request.body.password;

    if (!email || !password) {
      let err = new Error('E-mail or password missing');
      err.status = 400;
      return next(err);
    }

    CompanyModel.findAsync({ email, password })
      .then(function(data) {
        if (!data) {
          let err = new Error('Invalid e-mail or password');
          err.status = 401;
          throw err;
        }

        let expires = moment().add(15, 'minutes').valueOf();
        let token = jwt.encode({
          email: email,
          exp: expires
        }, config.get('jwtTokenSecret'));

        response.json({ token });
      })
      .catch(next);
  },

  logout: function(request, response, next) {

  },

  ensureAuthenticated: function(request, response, next) {
    let token = request.headers['x-access-token'];
    if(!token) {
      let err = new Error('Token missing');
      err.status = 401;
      return next(err);
    }
    try {
      let decoded = jwt.decode(token, config.get('jwtTokenSecret'));
      let isExpired = moment(decoded.exp).isBefore(new Date());
      if(isExpired) {
          let err = new Error('Token expired');
          err.status = 401;
          return next(err);
      } else {
          request.user = decoded.user;
          debug(request.user);
          next();
      }
    } catch(err) {
      return next(err);
    }
  }

};

module.exports = AuthController;
