var Semaforo = require('./Semaforo.js');
var muestraEstado = require('./MuestraEstado.js');
var EstadosSemaforo = require('./EstadosSemaforo.js');
var semaforo = new Semaforo();

semaforo.on('cambiaEstado',function(estado){
	muestraEstado(estado);
});
semaforo.setEstado(EstadosSemaforo.ROJO);
setInterval(function(){
	var nuevoEstado = Math.floor(Math.random()*3);
	semaforo.setEstado(nuevoEstado);
},500);