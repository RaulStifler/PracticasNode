var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var plantilla2 = require('./routes/plantilla2');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var jsonVista={
	enlaces: [{
		texto: 'Enlace 1',
		direccion: '/enlace1'
	},{
		texto: 'Enlace 2',
		direccion: '/enlace2'
	},{
		texto: 'Enlace 3',
		direccion: '/enlace3'
	},{
		texto: 'Enlace 4',
		direccion: '/enlace4'
	},{
		texto: 'Enlace 5',
		direccion: '/enlace5'
	}],
	descripcion: '',
	contenido: ''
};

app.get("/Ejercicio2",function(req,res) {
	jsonVista.descripcion='Apartado Descripción.';
	jsonVista.contenido='Apartado de Contenido.';
	res.render('plantilla2',jsonVista);
});
app.get("/enlace1",function(req,res) {
	jsonVista.descripcion='Este es el titulo del Enlace 1.';
	jsonVista.contenido='Este es el contenido del apartado 1, Este es el contenido del apartado 1, Este es el contenido del apartado 1, Este es el contenido del apartado 1, Este es el contenido del apartado 1, Este es el contenido del apartado 1, Este es el contenido del apartado 1, Este es el contenido del apartado 1, Este es el contenido del apartado 1, Este es el contenido del apartado 1, Este es el contenido del apartado 1, Este es el contenido del apartado 1, Este es el contenido del apartado 1, Este es el contenido del apartado 1, Este es el contenido del apartado 1, Este es el contenido del apartado 1, Este es el contenido del apartado 1, Este es el contenido del apartado 1, Este es el contenido del apartado 1, Este es el contenido del apartado 1';
	res.render('plantilla2',jsonVista);
});
app.get("/enlace2",function(req,res) {
	jsonVista.descripcion='Este es el titulo del Enlace 2.';
	jsonVista.contenido='Este es el contenido del apartado 2, Este es el contenido del apartado 2, Este es el contenido del apartado 2, Este es el contenido del apartado 2, Este es el contenido del apartado 2, Este es el contenido del apartado 2, Este es el contenido del apartado 2, Este es el contenido del apartado 2, Este es el contenido del apartado 2, Este es el contenido del apartado 2, Este es el contenido del apartado 2, Este es el contenido del apartado 2, Este es el contenido del apartado 2, Este es el contenido del apartado 2, Este es el contenido del apartado 2, Este es el contenido del apartado 2, Este es el contenido del apartado 2, Este es el contenido del apartado 2, Este es el contenido del apartado 2, Este es el contenido del apartado 2';
	res.render('plantilla2',jsonVista);
});
app.get("/enlace3",function(req,res){
	jsonVista.descripcion='Este es el titulo del Enlace 3.';
	jsonVista.contenido='Este es el contenido del apartado 3, Este es el contenido del apartado 3, Este es el contenido del apartado 3, Este es el contenido del apartado 3, Este es el contenido del apartado 3, Este es el contenido del apartado 3, Este es el contenido del apartado 3, Este es el contenido del apartado 3, Este es el contenido del apartado 3, Este es el contenido del apartado 3, Este es el contenido del apartado 3, Este es el contenido del apartado 3, Este es el contenido del apartado 3, Este es el contenido del apartado 3, Este es el contenido del apartado 3, Este es el contenido del apartado 3, Este es el contenido del apartado 3, Este es el contenido del apartado 3, Este es el contenido del apartado 3, Este es el contenido del apartado 3';
	res.render('plantilla2',jsonVista);
});
app.get("/enlace4",function(req,res){
	jsonVista.descripcion='Este es el titulo del Enlace 4.';
	jsonVista.contenido='Este es el contenido del apartado 4, Este es el contenido del apartado 4, Este es el contenido del apartado 4, Este es el contenido del apartado 4, Este es el contenido del apartado 4, Este es el contenido del apartado 4, Este es el contenido del apartado 4, Este es el contenido del apartado 4, Este es el contenido del apartado 4, Este es el contenido del apartado 4, Este es el contenido del apartado 4, Este es el contenido del apartado 4, Este es el contenido del apartado 4, Este es el contenido del apartado 4, Este es el contenido del apartado 4, Este es el contenido del apartado 4, Este es el contenido del apartado 4, Este es el contenido del apartado 4, Este es el contenido del apartado 4, Este es el contenido del apartado 4';
	res.render('plantilla2',jsonVista);
});
app.get("/enlace5",function(req,res){
	jsonVista.descripcion='Este es el titulo del Enlace 5.';
	jsonVista.contenido='Este es el contenido del apartado 5, Este es el contenido del apartado 5, Este es el contenido del apartado 5, Este es el contenido del apartado 5, Este es el contenido del apartado 5, Este es el contenido del apartado 5, Este es el contenido del apartado 5, Este es el contenido del apartado 5, Este es el contenido del apartado 5, Este es el contenido del apartado 5, Este es el contenido del apartado 5, Este es el contenido del apartado 5, Este es el contenido del apartado 5, Este es el contenido del apartado 5, Este es el contenido del apartado 5, Este es el contenido del apartado 5, Este es el contenido del apartado 5, Este es el contenido del apartado 5, Este es el contenido del apartado 5, Este es el contenido del apartado 5';
	res.render('plantilla2',jsonVista);
});
app.use('/', index);
app.use('/users', users);
app.use('/Plantilla2', plantilla2);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
