var stdio = require('stdio');
var Autor = require('./autor.js');
var controladorAutor = function(callback,parametroCallback){
	var nombreCompleto= '';
	var fechaNacimiento= '';
	var nacionalidad='';
	stdio.question('Introduce el nombre del Autor', function(err,nombreCompletoAutor){
		if (err) return callback(parametroCallback);
		nombreCompleto=nombreCompletoAutor;
		stdio.question('Introduce la fecha de Nacimiento del Autor',function(err,fechaNacimientoAutor){
			if (err) return callback(parametroCallback);
			fechaNacimiento=fechaNacimientoAutor;
			stdio.question('Introduce nacionalidad del Autor',function(err,nacionalidadAutor){
				if (err) return callback(parametroCallback);
				nacionalidad=nacionalidadAutor;
				var a1 = new Autor();
				a1.setNombreCompleto(nombreCompleto);
				a1.setFechaNacimiento(fechaNacimiento);
				a1.setNacionalidad(nacionalidad);
				muestraAutor(a1,function(){
					return callback(parametroCallback,a1);
				});
			});
		});
	});
};
function muestraAutor(autor,callback){
	var nombreCompleto=autor.getNombreCompleto();
	var fechaNacimiento=autor.getFechaNacimiento();
	var nacionalidad=autor.getNacionalidad();

	console.log('Nombre del Autor: '+nombreCompleto);
	console.log('Fecha de Nacimiento de Autor: '+fechaNacimiento);
	console.log('Nacionalidad del Autor: '+nacionalidad);
	stdio.question('Pulsa enter para continuar...',function(){
		callback();
	});
};
module.exports = controladorAutor;