var events = require('events');
var util = require('util');
var Semaforo = function(){
	events.EventEmitter.call(this);
};
util.inherits(Semaforo,events.EventEmitter);
Semaforo.prototype.cambiaColor=function(req,res,next){
	this.emit('get',req,res,next);
}
module.exports = Semaforo;