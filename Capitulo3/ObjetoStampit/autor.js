var stampit = require('stampit');
var Autor = function(){
	var objetoAutor = stampit();
	var Clase = function(){
		var nombre='No Name';
		var printNombre = function(){
			console.log('The name is: '+nombre);
		};
		this.getNombre = function(){
			return nombre;
		};
		this.setNombre = function(nombreAutor){
			nombre=nombreAutor;
		};
		this.printN=function(){//Metodo privado que accede a un Metodo Publico 
			return printNombre();
		};
	};
	objetoAutor.enclose(Clase);
	return objetoAutor.create();
};
module.exports = Autor;