'use strict';

let express = require('express');
let debug = require('debug')('curso-mean:app');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();


global.Promise = require('bluebird');


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
  response.json({ err: err.message });
  debug(err.stack);
});

module.exports = app;
