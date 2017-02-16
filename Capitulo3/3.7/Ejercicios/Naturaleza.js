var Meteorologia = require('./Meteorologia.js');
var MuestraEstado = require('./MuestraEstado.js')
var EstadoMeteorologico = require('./EstadoMeteorologico.js');
var N_ESTADOS =25;	

var meteorologia = new Meteorologia();
meteorologia.on('cambiaEstado',function(estado){
	MuestraEstado(estado);
});
var i = 1;
meteorologia.setEstado(EstadoMeteorologico.SOLEADO);
console.log('Estado '+i);
var intervalo = setInterval(function(){
	var nuevoEstado = Math.floor(Math.random()*(EstadoMeteorologico.NIEVE - EstadoMeteorologico.SOLEADO + 1)) + EstadoMeteorologico.SOLEADO;
	meteorologia.setEstado(nuevoEstado);
	i++;
	console.log('Estado '+i);
	if (i===N_ESTADOS) {
		meteorologia.setEstado(null);
		clearInterval(intervalo);
	}
},100);