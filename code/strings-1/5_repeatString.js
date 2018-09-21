// Write a JavaScript function to repeat a string a specified times. 
// Test Data :
// console.log(repeatString('a', 4)); 
// console.log(repeatString('a'));
// Output : 
// "aaaa" 
// "Error in string or count."

// Note - without using repeat method

function repeatString(str, num) {
	if(num == undefined) {
		return 'error in string or count';
	}
	var result = '';
	for(var i = 0; i < num; i++) {
		result = result + str;
	}
	return result;
}

console.log(repeatString('a', 4));
console.log(repeatString('a'));