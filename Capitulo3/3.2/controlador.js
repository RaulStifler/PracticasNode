var Autor = require('./autor.js');
var Libro = require('./libro.js');
var autor1 = new Autor();
autor1.setNombreCompleto('Raul Stifler');
autor1.setFechaNacimiento('25/02/1992');
autor1.setNacionalidad('Mexicano');

var l = new Libro();

l.setTitulo('NodeJS Stifler');
l.setEditorial('Alfaomega');
l.setAutor(autor1);
l.setFechaPrimeraEdicion('06/02/2015');
l.setIsbn('987-15-678213-8-0');



var titulo = l.getTitulo();
var editorial=l.getEditorial();
var autorLibro =l.getAutor();
var fechaPrimeraEdicion = l.getFechaPrimeraEdicion();
var isbnLibro = l.getIsbn();

var nombreAutor = autorLibro.getNombreCompleto();
var fechaNacimiento = autorLibro.getFechaNacimiento();
//var comprobarfechaNacimiento = autorLibro.check('fechaNacimiento');
//var correctaFecha = comprobarfechaNacimiento();
var nacionalidad = autorLibro.getNacionalidad();

console.log(titulo);
console.log(editorial);
console.log(fechaPrimeraEdicion);
console.log(isbnLibro);
console.log(nombreAutor);
console.log(fechaNacimiento);
console.log(nacionalidad);
console.log(autorLibro);