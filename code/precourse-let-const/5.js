// Write the function (iPush) which is a replica of the behavior of JavaScript's array push method. 

// iPush should accept the array to operate on as an argument and return the same array with the added element.

// iPush will receive two arguments: the array, and a single value to the added to the end of the array.

// Do not use the built in  push() method in your function!

// Example

// INPUT: iPush([1, 2, 3], 4);
// OUTPUT: [1, 2, 3, 4]

function iPush(a,b){
	if(b === undefined) {
		return a;
	}
	a.push(b);
	return a;
}

console.log(iPush([1, 2, 3], 4));