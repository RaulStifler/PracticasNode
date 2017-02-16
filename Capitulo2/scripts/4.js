var i=1;
(function main(){
	if(i>0){
		//var i=3; //si se escribe de nuevo var se realiza la alzada y cuando comprueba el valor se vuelve undefined
		i=3;//si no existe una variable con este nombre (i) en la funcion, se busca una en el amito superior ;-)
		document.writeln("El valor de i es: "+i+".<br/>");
	}
	document.writeln("El valor de i es: "+i+".<br/>");
})();