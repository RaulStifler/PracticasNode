var EstadosSemaforo = require('./EstadosSemaforo.js');
var muestraEstado = function(nuevoEstado){
	if (nuevoEstado===EstadosSemaforo.ROJO) {
		console.log('ROJO: Detente, No puedes Avanzar!');
	}else if (nuevoEstado===EstadosSemaforo.AMBAR) {
		console.log('ABMAR: Reduce tu Velocidad!');
	}else if (nuevoEstado===EstadosSemaforo.VERDE) {
		console.log('VERDE: Puede Avanzar!');
	}
};
module.exports = muestraEstado;