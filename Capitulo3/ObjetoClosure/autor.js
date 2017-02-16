var Persona = function(){
	var sThis=this;
	this.datosPersona={
		nombre: 'Hola'
	};
	this.printName=function(){
		console.log('Metodo printName: El Nombre es '+sThis.datosPersona.nombre);
	}
	var getNombre = function(){
		return sThis.datosPersona.nombre;
	},
	setNombre = function(nombrePersona){
		sThis.datosPersona.nombre = nombrePersona;
	},
	imprimeNombre=function(){
		sThis.printName();
	};
	return {
		getNombre: getNombre,
		setNombre: setNombre,
		imprimeNombre: imprimeNombre
	}
};
module.exports = Persona;

