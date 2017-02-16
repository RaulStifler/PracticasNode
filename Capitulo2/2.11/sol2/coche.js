var Coche=function($estadoDOM){
	this.$estadoDOM=$estadoDOM;
	this.estadoCoche=EstadoCoche.MOTORAPAGADO;
	this.procesaCambio=function(event){
		event.preventDefault();
		var cambio=false;
		if (event.target.id==='arrancar') {
			if (this.estadoCoche===EstadoCoche.MOTORAPAGADO) {
				this.estadoCoche=EstadoCoche.MOTORENCENDIDOCOCHEPARADO;
				cambio=true;
			}
		}else if (event.target.id==='marchar') {
			if (this.estadoCoche===EstadoCoche.MOTORENCENDIDOCOCHEPARADO) {
				this.estadoCoche=EstadoCoche.MOTORENCENDIDOCOCHEMOVIMIENTO;
				cambio=true;
			}
		}else if (event.target.id==='parar') {
			if (this.estadoCoche===EstadoCoche.MOTORENCENDIDOCOCHEMOVIMIENTO) {
				this.estadoCoche=EstadoCoche.MOTORENCENDIDOCOCHEPARADO;
				cambio=true;
			}
		}else if (event.target.id==='apagar') {
			if (this.estadoCoche===EstadoCoche.MOTORENCENDIDOCOCHEPARADO) {
				this.estadoCoche=EstadoCoche.MOTORAPAGADO;
				cambio=true;
			}
		}
		if (cambio) {
			if (this.estadoCoche===EstadoCoche.MOTORAPAGADO) {
				this.$estadoDOM.append($("<div>El Motor esta Apagado!</div>"));
			}else if (this.estadoCoche===EstadoCoche.MOTORENCENDIDOCOCHEPARADO) {
				this.$estadoDOM.append($("<div>El Motor Encedido y Coche Parado!</div>"));
			}else if (this.estadoCoche===EstadoCoche.MOTORENCENDIDOCOCHEMOVIMIENTO) {
				this.$estadoDOM.append($("<div>El Motor Encendido y Coche Movimiento!</div>"));
			}
		}
	}
	this.$estadoDOM.append($("<div>El motor esta Apagado!</div>"));
}