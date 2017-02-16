var Libro = function(){
	var sThis = this;
	this.datosLibro={
		titulo: '',
		editorial: '',
		autor: {},
		fechaPrimeraEdicion: '',
		isbn: ''
	};
	this.devuelveVerdadero = function(){
		return true;
	};
	this.compruebaIsbn = function(){
		var partesIsbn = sThis.datosLibro.isbn.split('-');
		var nPartes = partesIsbn.length;
		if (nPartes!==5) {
			return false;
		}else{
			var valido = true;
			for(var i = 0;i<nPartes;i++){
				var estaParte = partesIsbn[i];
				//Usamos expresion Regular
				if (!/^([0-9])*$/.test(estaParte)) {
					valido = false;
					break;
				}
			}
			return valido;
		}
	};
	this.checkCampo = function(nombreCampo) {
		if ((nombreCampo)&&(nombreCampo!=='')) {
			if (nombreCampo==='isbn') {
				return sThis.compruebaIsbn;
			}else{
				return sThis.devuelveVerdadero;
			}
		}else{
			return sThis.devuelveVerdadero;
		}
	};
	var getTitulo = function(){
		return sThis.datosLibro.titulo;
	},
	setTitulo = function(tituloLibro){
		sThis.datosLibro.titulo=tituloLibro;
	},
	getEditorial = function(){
		return sThis.datosLibro.editorial;
	},
	setEditorial = function(editorialLibro) {
		sThis.datosLibro.editorial=editorialLibro;
	},
	getAutor = function(){
		return sThis.datosLibro.autor;
	},
	setAutor = function(autorLibro){
		sThis.datosLibro.autor=autorLibro;
	},
	getFechaPrimeraEdicion=function(){
		return sThis.datosLibro.fechaPrimeraEdicion;
	},
	setFechaPrimeraEdicion=function(fechaLibro){
		sThis.datosLibro.fechaPrimeraEdicion=fechaLibro;
	},
	getIsbn = function(){
		return sThis.datosLibro.isbn;
	},
	setIsbn = function(isbnLibro){
		sThis.datosLibro.isbn=isbnLibro;
	},
	check = sThis.checkCampo;
	return{
		getTitulo: getTitulo,
		setTitulo: setTitulo,
		getEditorial: getEditorial,
		setEditorial: setEditorial,
		getAutor: getAutor,
		setAutor: setAutor,
		getFechaPrimeraEdicion: getFechaPrimeraEdicion,
		setFechaPrimeraEdicion: setFechaPrimeraEdicion,
		getIsbn: getIsbn,
		setIsbn: setIsbn,
		check: check
	}
};
module.exports = Libro;