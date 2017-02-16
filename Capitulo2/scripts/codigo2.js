var autor = new Autor();
autor.setNombreCompleto('Raul Stifler');
autor.setFechaNacimiento('25/12/1992');
autor.setNacionalidad('Mexicano');

var libro = new Libro();
libro.setTitulo('Aprendiendo Notacion JSON');
libro.setEditorial('Publicaciones Universitarias SL');
libro.setAutor(autor);
libro.setFechaPrimeraEdicion('01/01/2012');

//un isbn incorrecto
libro.setIsbn('123456789');
var comprobacion = libro.check('isbn');
if (comprobacion()) {
	alert('Es correcto :-) ');
}else{
	alert('Es incorrecto :-( ');
}


libro.setIsbn('978-15-678213-8-0');
comprobacion = libro.check('isbn');
if (comprobacion()) {
	alert('Es correcto :-) ');
}else{
	alert('Es incorrecto :-( ');
}