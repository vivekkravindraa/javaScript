// Create a function sayAgain that repeats a string a certain number of times.

// sayAgain accepts two arguments:

// The string to repeat, str
// The number of times to repeat that string, num
// sayAgain should return a string that is the concatenation of the str argument n times.

// NOTE: Do not use the repeat method built into JavaScript 

// Examples:

// INPUT: sayAgain("hi", 4);
// OUTPUT: 'hihihihi'
// INPUT: sayAgain("hi", 0);
// OUTPUT: ''
// INPUT: sayAgain("ok", 6);
// OUTPUT: 'okokokokokok'

function sayAgain(a,b) {
	let myString = '';
	for(let i = 0; i < b; i++) {
		myString = myString + a;
	}
	return myString;
}

console.log(sayAgain("hi", 4));
console.log(sayAgain("hi", 0));
console.log(sayAgain("ok", 6));