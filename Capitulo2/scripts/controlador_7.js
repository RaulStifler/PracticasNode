var controlador = function controlador($document){
	var $nombre = $document.find('input#nombre');
	var $fNacimiento=$document.find('input#fnacimiento');
	var $nacionalidad=$document.find('input#nacionalidad');
	var nombre = $nombre.val();
	var fNacimiento=$fNacimiento.val();
	var nacionalidad=$nacionalidad.val();

	var campos={
		nombre: nombre,
		fNacimiento: fNacimiento,
		nacionalidad: nacionalidad
	};
	// esta sera la Secuencia Via CallBacks
	var autor = comprobaciones(campos,crearAutor);
	if (autor) {
		//Los datos ahora son Correctos
		/*alert(autor.getNombreCompleto());
		alert(autor.getFechaNacimiento());
		alert(autor.getNacionalidad());*/
	}else{
		alert('Hay errores en los Datos');
	}
};

var comprobaciones= function comprobaciones(campos,callback){
	var nombre = campos.nombre;
	var fNacimiento = campos.fNacimiento;
	var nacionalidad = campos.nacionalidad;
	if ((nombre&&nombre!='')&&(fNacimiento&&fNacimiento!='')&&(nacionalidad&&nacionalidad!='')) {
		return callback(true,campos);
	}else{
		return callback(false);
	}
};

var crearAutor = function crearAutor(valido,campos){
	if (valido) {
		var nombre = campos.nombre;
		var fNacimiento = campos.fNacimiento;
		var nacionalidad = campos.nacionalidad;

		var autor = new Autor();
		autor.setNombreCompleto(nombre);
		autor.setFechaNacimiento(fNacimiento);
		autor.setNacionalidad(nacionalidad);

		var comprobacion = autor.check('fechaNacimiento');
		var correcto = comprobacion();

		if (correcto) {
			return autor;
		}else{
			return null;
		}
	}else{
		return null;
	}
};