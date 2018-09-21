// Create the function vowelCount(str) that takes a str parameter and returns the number of vowels the string contains (ie. "Dct Academy" would return 3).

// Examples:

// INPUT: vowelCount("Good Job");
// OUTPUT: 3
// INPUT: vowelCount('Yankees');
// OUTPUT: 3
// INPUT: vowelCount('symphysy');
// OUTPUT:0

function vowelCount(str) {
	let count = 0;
	if(str.length < 1) {
		return 'empty string';
	}
	for(let i = 0; i < str.length; i++) {
		if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
			count = count + 1;
		} else if(str[i] !== 'a' || str[i] !== 'e' || str[i] !== 'i' || str[i] !== 'o' || str[i] !== 'u') {
			count = count + 0;
		}
	}
	return count;
}

console.log(vowelCount("Good Job"));
console.log(vowelCount('Yankees'));
console.log(vowelCount('symphysy'));