// Create a function that takes a number as an argument and returns an array. The first element of the array should be 0, and then each element should increase by 1 until it reaches the input number. Then, each element should count back down to 0.

// Examples:

// INPUT: countUpThenDown(2)
// OUTPUT: [0, 1, 2, 1, 0]
// INPUT: countUpThenDown(0)
// OUTPUT: [0]

function countUpThenDown(a){
	const myArray = [];
	if(a.length < 1) {
		myArray.push(a);
	}
	for(let i = 0; i < a; i++) {
		myArray.push(i);
	}
	for(let i = a; i >= 0; i--) {
		myArray.push(i);
	}
	return myArray;
}

console.log(countUpThenDown(2));
console.log(countUpThenDown(0));