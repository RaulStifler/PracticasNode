var util = require('util');
var Stream = require('stream');
var ReaderStream = function(datos){
	Stream.Readable.call(this,{objectMode: true});
	//Implementar funcion this._read()
	this._read=function(){
		if (datos!=null) {
			var nDatos = datos.length;
			for (var i = 0; i < nDatos; i++) {
				var dato = datos[i];
				var claves = Object.keys(dato);
				var nValores = claves.length;
				contador=0;
				var j;
				for(j in dato){
					var estaClave= claves[contador];
					var variable= dato[j];
					if (contador===nValores-1) {
						this.push(estaClave+': '+variable+'\n');
					}else{
						this.push(estaClave+': '+variable+' - ');
					}
					contador++;
				}
			}
		}
		this.push('Document\'s end by Stifler');
		this.push(null);
	};
};
util.inherits(ReaderStream,Stream.Readable);
module.exports = ReaderStream;