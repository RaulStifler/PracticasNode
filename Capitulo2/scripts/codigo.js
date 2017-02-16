var autor = new Autor();
autor.setNombreCompleto('Raul Stifler');
autor.setFechaNacimiento('25/12/1992');
autor.setNacionalidad('Mexicano');

var libro = new Libro();
libro.setTitulo('Aprendiendo Notacion JSON');
libro.setEditorial('Publicaciones Universitarias SL');
libro.setAutor(autor);
libro.setFechaPrimeraEdicion('01/01/2012');
libro.setIsbn('123456789');

alert(libro.getTitulo());
alert(libro.getEditorial());
alert(libro.getAutor().getNombreCompleto());
