// Write a function, petNameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as that person's pet name! If the 3rd letter is a vowel, return the first 4 letters.

// Examples:

// INPUT: petNameGenerator('Sachin')
// OUTPUT: 'Sac'
// INPUT: petNameGenerator('Elon')
// OUTPUT: 'Elon'

function petNameGenerator(a){
	let myString = '';
	if(a.length < 1) {
		return 'invalid input';
	}
	for(let i = 0; i < a.length; i++) {
		if(a[2] === 'a' || a[2] === 'e' || a[2] === 'i' || a[2] === 'o' || a[2] === 'u') {
			myString = a.slice(0,4);
		} else {
			myString = a.slice(0,3);
		}
	}
	return myString;
}

console.log(petNameGenerator('Sachin'));
console.log(petNameGenerator('Elon'));