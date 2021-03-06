var degug = require('debug')('appweb:server');
var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var utils = require('./controller/utils');
var normalizePort = utils.normalizePort;
var onError = utils.onError;
var onListening = utils.onListening;
var routes = require('./controller/index');
var users = require('./controller/users');
var stifler = require('./controller/stifler');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
var port = normalizePort(process.env.PORT || 3000);
app.set('port',port);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'viewsfiles')));

app.use('/', routes);
app.use('/users', users);
app.use('/stifler', stifler);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});// module.exports = app;

var server = http.createServer(app);
server.listen(port);
server.on('error',function(error){
  onError(error,port);
});
server.on('listenig',function() {
  onListening(server,debug);
});