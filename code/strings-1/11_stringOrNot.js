// Write a JavaScript function to check whether an `input` is a string or not.

// Test Data :
// isString('w3resource') 
// true
// isString([1, 2, 4, 0])
// false

function isString(a){
	if(typeof a === 'string') {
		return true;
	} else {
		return false;
	}
}

console.log(isString('w3resource'));
console.log(isString([1, 2, 4, 0]));