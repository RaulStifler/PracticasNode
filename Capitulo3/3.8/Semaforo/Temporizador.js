var Semaforo = require('./Semaforo.js');
var cambiaSemaforo = new Semaforo();
cambiaSemaforo.on('get',function(req,res,next){
	if (req.color==='Rojo') {
		res.color='Verde';
	}else if (req.color==='Verde') {
		res.color='Ambar';
	}else if (req.color==='Ambar') {
		res.color='Rojo';
	}
	next(res);
});
var estadoActual = {
	color: 'Rojo'
};
var estadoSiguiente = {
	color: ''
};
var i = 0;
var NCAMBIO=9;

function actualizarEstado(res){
	estadoActual.color=res.color;
	estadoSiguiente.color='';
}
var intervalo = setInterval(function(){
	var req = estadoActual;
	var res = estadoSiguiente;
	cambiaSemaforo.cambiaColor(req,res,actualizarEstado);
	if (i==NCAMBIO) {
		clearInterval(intervalo);
	}else{
		console.log('El estado Actual es: '+estadoActual.color+'.');
		i++;
	}
},100);