var EstadoMeteorologico = require('./EstadoMeteorologico.js');
var muestraEstado = function(nuevoEstado){
	if (nuevoEstado===EstadoMeteorologico.SOLEADO) {
		console.log('El Tiempo esta Soleado \n');
	}else if (nuevoEstado===EstadoMeteorologico.NUBLADO) {
		console.log('El Tiempo esta Nublado \n');
	}else if (nuevoEstado===EstadoMeteorologico.LLUVIOSO) {
		console.log('El Tiempo esta Lluvioso \n');
	}else if (nuevoEstado===EstadoMeteorologico.VENTOSO) {
		console.log('El Tiempo esta Ventoso \n');	
	}else if (nuevoEstado===EstadoMeteorologico.NIEVE) {
		console.log('Hay Nieve \n');
	} 
};
module.exports = muestraEstado;