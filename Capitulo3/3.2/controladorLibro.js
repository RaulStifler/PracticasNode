var stdio = require('stdio');
var Libro = require('./libro.js');
var controladorLibro = function(callback,parametroCallback,autorLibro){
	var titulo='';
	var editorial='';
	var autor=autorLibro;
	var fechaPrimeraEdicion='';
	var isbn='';
	stdio.question('Introduce titulo',function(err,tituloLibro){
		if (err) return callback(parametroCallback,autor);
		titulo=tituloLibro;
		stdio.question('Introduce editorial',function(err,editorialLibro){
			if (err) return callback(parametroCallback,autor);
			editorial=editorialLibro;
			stdio.question('Introduce fecha primera Edicion', function(err,fechaPrimeraEdicionLibro){
				if (err) return callback(parametroCallback,autor);
				fechaPrimeraEdicion=fechaPrimeraEdicionLibro;
				stdio.question('Introduce ISBN', function(err,isbnLibro){
					if (err) return callback(parametroCallback,autor);
					isbn=isbnLibro;
					var lib = new Libro();
					lib.setTitulo(titulo);
					lib.setEditorial(editorial);
					lib.setAutor(autor);
					lib.setFechaPrimeraEdicion(fechaPrimeraEdicion);
					lib.setIsbn(isbn);
					muestraLibro(lib,function(){
						return callback(parametroCallback,autor);
					});
				});
			});
		});
	});
};

function muestraLibro(libro,callback){
	var titulo = libro.getTitulo();
	var editorial = libro.getEditorial();
	var autor = libro.getAutor();
	var fechaPrimeraEdicion = libro.getFechaPrimeraEdicion();
	var isbn = libro.getIsbn();
	console.log('El titulo es: '+titulo);
	console.log('La Editorial es: '+editorial);
	if ((!autor)||(autor===null)) {
		console.log('El Libro no Tiene Autor.');
	}else{
		var nombreCompleto = autor.getNombreCompleto();
		var fechaNacimiento = autor.getFechaNacimiento();
		var nacionalidad = autor.getNacionalidad();
		console.log('---Nombre Autor: '+nombreCompleto);
		console.log('---Nacimiento Autor: '+fechaNacimiento);
		console.log('---Nacionalidad Autor: '+nacionalidad);
	}
	console.log('Fecha primera Edicion: '+fechaPrimeraEdicion);
	console.log('ISBN del Libro: '+isbn);
	stdio.question('Pulsa enter para Continuar...',function(){
		callback();
	});
};
module.exports = controladorLibro;