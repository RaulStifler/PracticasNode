$(document).ready(function(){
	var $estadoDOM=$('div#estado');
	var coche = new Coche($estadoDOM);
	var manejadorEventos = coche.procesaCambio;
	var $arrancar = $('input#arrancar');
	var $marchar = $('input#marchar');
	var $parar = $('input#parar');
	var $apagar = $('input#apagar');
	$arrancar.click(manejadorEventos);
	$marchar.click(manejadorEventos);
	$parar.click(manejadorEventos);
	$apagar.click(manejadorEventos);
});