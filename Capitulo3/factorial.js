function factorial (n){
	if (n%1==0) {
		if (n>0) {
			return n*factorial(n-1);
		}else{
			return 1;
		}
	}else{
		return -1;
	}
}

console.log('El factorial es: '+factorial(6));