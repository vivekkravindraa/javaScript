// Test Data :

// 1. nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4);
// return 89

// 2. nthlargest([10,5,20,25],2);
// return 20

class Large {
	constructor(a,b) {
		this.a = a;
		this.b = b;
	}
	largest() {
		if(this.a.length < 1 || this.b < 0) {
			return 'invalid input';
		}
		return this.a.splice(0,this.b+1).sort((c,d) => d-c)[0]
	}
}
function nthLargest(a,b){
	let n = new Large(a,b);
	return n.largest();
}

console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
console.log(nthlargest([10,5,20,25],2));
console.log(nthlargest([1,2,3,4,5],3));