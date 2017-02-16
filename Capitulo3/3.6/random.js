setInterval(function(){
	var num = Math.random()*5;
	console.log(num+'---'+Math.floor(num));
	//var nuevoEstado = Math.floor(Math.random()*2);
	//var nuevoEstado = Math.floor(Math.random()*(EstadoMeteorologico.NIEVE - EstadoMeteorologico.SOLEADO + 1)) + EstadoMeteorologico.SOLEADO;
	//console.log(nuevoEstado);
	//meteorologia.setEstado(nuevoEstado);
},500);