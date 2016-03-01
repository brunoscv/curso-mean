'use strict';

let express = require('express');
let debug = require('debug')('curso-mean:app');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();


global.Promise = require('bluebird');

// Grab environment port or define 3000 by default
app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(cors());

app.use(function(request, response, next){
  if (request.url === '/favicon.ico') {
    response.writeHead(200, {'Content-Type' : 'image/x-icon'});
    response.end('');
  } else {
    next();
  }
});

app.use(express.static('./public'));

app.use('/', require('./routes'));

app.use(function(request, response, next) {
  var err = new Error('Not found ;(');
  err.status = 404;
  next(err);
});

app.use(function(err, request, response, next) {
  response.status(err.status || 500).json({ err: err.message });
  debug(err.stack);
});

module.exports = app;
