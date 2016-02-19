'use strict';

let CompanyModel = Promise.promisifyAll(require('../models/CompanyModel'));
let debug = require('debug')('curso-mean:controller:company');


let CompanyController = {
  byId: function(request, response, next) {
    CompanyModel.findOne({ _id: request.params._id })
      .then(function(data) {
        if (!data) {
          var err = new Error('Company Not found ;(');
          err.status = 404;
          throw err;
        }
        return data;
      })
      .then(function(data) {
        response.json(data);
      })
      .catch(next);
  },

  list: function(request, response, next) {
    CompanyModel.find()
      .then(function(data) {
        response.json(data);
      })
      .catch(next);
  },
  create: function(request, response, next) {
    CompanyModel.create(request.body)
      .then(function(data) {
        response.json(data);
      })
      .catch(next);
  },
  update: function(request, response, next) {
    CompanyModel.update({ _id: request.params._id }, request.body)
      .then(function(data) {
        response.json(data);
      })
      .catch(next);
  },
  remove: function(request, response, next) {
    CompanyModel.remove({ _id: request.params._id })
      .then(function(data) {
        response.json(data);
      })
      .catch(next);
  }
};

module.exports = CompanyController;
