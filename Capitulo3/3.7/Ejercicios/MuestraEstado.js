var EstadoMeteorologico = require('./EstadoMeteorologico.js');
var ReaderStream = require('./ReaderStream.js');
var fs = require('fs');
var str = null;
var escritura = fs.createWriteStream('salida.txt');
var nDatos = 0;
var datos = [];
var dato = null;
var muestraEstado = function(nuevoEstado){
	if (nuevoEstado!=null) {
		if (nuevoEstado===EstadoMeteorologico.SOLEADO) {
			dato = {
				'Meteorologia': 'Hace Sol'
			};
		}else if (nuevoEstado===EstadoMeteorologico.NUBLADO) {
			dato = {
				'Meteorologia': 'Hay nubes'
			};
		}else if (nuevoEstado===EstadoMeteorologico.LLUVIOSO) {
			dato = {
				'Meteorologia': 'Esta Lloviendo'
			};
		}else if (nuevoEstado===EstadoMeteorologico.VENTOSO) {
			dato = {
				'Meteorologia': 'Hay Viento'
			};	
		}else if (nuevoEstado===EstadoMeteorologico.NIEVE) {
			dato = {
				'Meteorologia': 'Hay Nieve'
			};
		}
		datos[nDatos]=dato;
		nDatos++;
	}else{
		str = new ReaderStream(datos);
		str.pipe(escritura);
	}
};
module.exports = muestraEstado;