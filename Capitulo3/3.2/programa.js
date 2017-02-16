var stdio = require('stdio');
var controladorAutor = require('./controladorAutor.js');
var controladorLibro = require('./controladorLibro.js');

function menuEntrada(callback,autor){
	console.log('1.- Formulario Autor...');
	console.log('2.- Formulario Libro...');
	console.log('3.- Salir...');
	stdio.question('Elige entrada: ',['1','2','3'],
		function (err, entrada){
			if (err) return callback(menuEntrada,autor);
			if (entrada==='1') {
				controladorAutor(callback,menuEntrada);
			}else if (entrada==='2') {
				controladorLibro(callback,menuEntrada,(autor)?autor:null);
			}else if (entrada==='3') {
				process.exit()
			}
		});
};
menuEntrada(menuEntrada);