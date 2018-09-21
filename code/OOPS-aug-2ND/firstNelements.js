
// First n elements in array
// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 

// Test Data
// first([7, 9, 0, -2]) ; // returns 7 
// first([],3); // returns []
// first([7, 9, 0, -2],3); // returns [7, 9, 0] 
// first([7, 9, 0, -2],6)); // returns [7, 9, 0, -2] 
// first([7, 9, 0, -2],-3); returns [7,9,0,-2]

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

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
