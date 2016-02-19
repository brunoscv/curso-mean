'use strict';

let debug = require('debug')('curso-mean:controller:app');
const APP_ROOT = process.env.PWD;

let AppController = {
  home: function(request, response, next) {
    response.sendFile(`${APP_ROOT}/public/index.html`);
  }
};

module.exports = AppController;
