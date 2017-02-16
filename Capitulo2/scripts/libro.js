var Libro= function(){
	var sThis=this;
	this.datosLibro = {
		titulo: '',
		editorial: '',
		autor: {},
		fechaPrimeraEdicion: '',
		isbn: ''
	};
	var getTitulo=function(){
		return sThis.datosLibro.titulo;
	},
	setTitulo = function(titulo){
		sThis.datosLibro.titulo=titulo;
	},
	getEditorial = function(){
		return sThis.datosLibro.editorial;
	},
	setEditorial = function(editorial){
		sThis.datosLibro.editorial=editorial;
	},
	getAutor = function(){
		return sThis.datosLibro.autor;
	},
	setAutor = function(autor){
		sThis.datosLibro.autor=autor;
	},
	getFechaPrimeraEdicion = function(){
		return sThis.datosLibro.fechaPrimeraEdicion;
	},
	setFechaPrimeraEdicion = function(fechaPrimeraEdicion){
		sThis.datosLibro.fechaPrimeraEdicion=fechaPrimeraEdicion;
	},
	getIsbn = function(){
		return sThis.datosLibro.isbn;
	},
	setIsbn = function(isbn){
		sThis.datosLibro.isbn=isbn;
	};
	return {
		getTitulo: getTitulo,
		setTitulo: setTitulo,
		getEditorial: getEditorial,
		setEditorial: setEditorial,
		getAutor: getAutor,
		setAutor: setAutor,
		getFechaPrimeraEdicion: getFechaPrimeraEdicion,
		setFechaPrimeraEdicion: setFechaPrimeraEdicion,
		getIsbn: getIsbn,
		setIsbn: setIsbn
	}
};