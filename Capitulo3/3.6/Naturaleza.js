var Meteorologia = require('./Meteorologia.js');
var MuestraEstado = require('./MuestraEstado.js')
var EstadoMeteorologico = require('./EstadoMeteorologico.js');
var meteorologia = new Meteorologia();
meteorologia.on('cambiaEstado',function(estado){
	MuestraEstado(estado);
});
meteorologia.setEstado(EstadoMeteorologico.SOLEADO);
setInterval(function(){
	var nuevoEstado = Math.floor(Math.random()*(EstadoMeteorologico.NIEVE - EstadoMeteorologico.SOLEADO + 1)) + EstadoMeteorologico.SOLEADO;
	meteorologia.setEstado(nuevoEstado);
},500);