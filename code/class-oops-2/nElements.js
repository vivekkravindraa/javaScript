class First {
	constructor(a,b) {
		this.a = a;
		this.b = b;
	}
	displayElements() {
		if(this.b < 0) {
			return this.a;
		} else if (this.b === undefined) {
			return this.a[0];
		}
		else {
			return this.a.splice(0,this.b);
		}
	}
}

function firstElements(a,b){
	let ele = new First(a,b);
	return ele.displayElements();
}

console.log(firstElements([7, 9, 0, -2]));		// returns 7 
console.log(firstElements([],3));				// returns []
console.log(firstElements([7, 9, 0, -2],3));	// returns [7, 9, 0] 
console.log(firstElements([7, 9, 0, -2],6));	// returns [7, 9, 0, -2] 
console.log(firstElements([7, 9, 0, -2],-3));	// returns [7,9,0,-2]