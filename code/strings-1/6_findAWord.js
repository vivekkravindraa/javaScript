// Write a JavaScript function to find a word within a string. 
// Test Data :
// console.log(findWord('The quick brown fox', 'fox')); 
// console.log(findWord('aa bb cc dd aa', 'aa'));
// Output : 
// "'fox' was found 1 times." 
// "'aa' was found 2 times."

function findWord(a,b){
	var count = 0;
	var splitStr = a.split(' ');
	for(var i = 0; i < splitStr.length; i++) {
		if(splitStr[i] === b) {
			count++;
		}
	}
	return `${b} was found ${count} times.`;
}

console.log(findWord('The quick brown fox', 'fox')); 
console.log(findWord('aa bb cc dd aa', 'aa'));