/*Trataremos de hacer un Objeto llamado Usuario
	El cual contendra: 
		Nick
		NombreCompleto
		Email
		Password*/

//Creando un Array Asociativo:
var usuario = new Array();
usuario["nick"]="RaulStifler7";
usuario["nombreCompleto"]="Raúl Reyes Nieves";
usuario["email"]="raulstifler25@gmail.com";
usuario["password"]="momantai";

/*Podriamos Acceder mediante:
	- usuario.nick 		-> punto seguido del campo
	- usuario["nick"]	-> Indexación por cadenas de Texto
 */

//Otra forma de crear el mismo objeto sin necesidad de especificar el indice para cada elemento del array
//Es utilizando la Notacion JSON ( JavaScript Object Notation - Notacion de Objeto de JavaScript )

var usuarioJSON={
	nick: "RaulStifler7",
	nombreCompleto: "Raúl Reyes Nieves",
	email: "raulstifler25@gmail.com",
	password: "momantai"
};
/*Podriamos Acceder mediante:
	- usuario.nick 		-> punto seguido del campo
 */