var express = require('express');
var router = express.Router();
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
	descripcion: 'Titulo del Enlace',
	contenido: 'Contenido del Enlace'
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('plantilla2',jsonVista);
});

module.exports = router;
