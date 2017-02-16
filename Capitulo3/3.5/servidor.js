var NPUERTO=8080;
//El paquete http viene por defecto en la Instalacion de Node.js
var http = require('http');
var funcionServidora = function(request,response){
	response.writeHead(200,{'Content-Type' : 'text/plain'});
	response.end('Hola Mundo');
};
var server = http.createServer(funcionServidora).listen(NPUERTO);
console.log('Servidor escuchando en el Puerto '+NPUERTO+'...');