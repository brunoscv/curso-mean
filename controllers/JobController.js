'use strict';

let JobModel = Promise.promisifyAll(require('../models/JobModel'));

let JobController = {
  byId: function(request, response, next) {
    JobModel.findOne({ _id: request.params._id })
      .then(function(data) {
        if (!data) {
          var err = new Error('Job Not found ;(');
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
    JobModel.find()
      .then(function(data) {
        response.json(data);
      })
      .catch(next);
  },
  create: function(request, response, next) {
    JobModel.create(request.body)
      .then(function(data) {
        response.json(data);
      })
      .catch(next);
  },
  update: function(request, response, next) {
    JobModel.update({ _id: request.params._id }, request.body)
      .then(function(data) {
        response.json(data);
      })
      .catch(next);
  },
  remove: function(request, response, next) {
    JobModel.remove({ _id: request.params._id })
      .then(function(data) {
        response.json(data);
      })
      .catch(next);
  },
  listByCompany: function(request, response, next) {
    JobModel.find({ _companyId: request.params._id })
      .then(function(data) {
        response.json(data);
      })
      .catch(next);
  }
};

module.exports = JobController;
