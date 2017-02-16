var Coche=function($estadoDOM){
	var sThis=this;
	this.$estadoDOM=$estadoDOM;
	this.estadoCoche=EstadoCoche.MOTORAPAGADO;
	this.procesaCambio=function(event){
		event.preventDefault();
		var cambio=false;
		if (event.target.id==='arrancar') {
			if (sThis.estadoCoche===EstadoCoche.MOTORAPAGADO) {
				sThis.estadoCoche=EstadoCoche.MOTORENCENDIDOCOCHEPARADO;
				cambio=true;
			}
		}else if (event.target.id==='marchar') {
			if (sThis.estadoCoche===EstadoCoche.MOTORENCENDIDOCOCHEPARADO) {
				sThis.estadoCoche=EstadoCoche.MOTORENCENDIDOCOCHEMOVIMIENTO;
				cambio=true;
			}
		}else if (event.target.id==='parar') {
			if (sThis.estadoCoche===EstadoCoche.MOTORENCENDIDOCOCHEMOVIMIENTO) {
				sThis.estadoCoche=EstadoCoche.MOTORENCENDIDOCOCHEPARADO;
				cambio=true;
			}
		}else if (event.target.id==='apagar') {
			if (sThis.estadoCoche===EstadoCoche.MOTORENCENDIDOCOCHEPARADO) {
				sThis.estadoCoche=EstadoCoche.MOTORAPAGADO;
				cambio=true;
			}
		}
		if (cambio) {
			if (sThis.estadoCoche===EstadoCoche.MOTORAPAGADO) {
				sThis.$estadoDOM.append($("<div>El Motor esta Apagado!</div>"));
			}else if (sThis.estadoCoche===EstadoCoche.MOTORENCENDIDOCOCHEPARADO) {
				sThis.$estadoDOM.append($("<div>El Motor Encedido y Coche Parado!</div>"));
			}else if (sThis.estadoCoche===EstadoCoche.MOTORENCENDIDOCOCHEMOVIMIENTO) {
				sThis.$estadoDOM.append($("<div>El Motor Encendido y Coche Movimiento!</div>"));
			}
		}
	}
	this.$estadoDOM.append($("<div>El motor esta Apagado!</div>"));
}