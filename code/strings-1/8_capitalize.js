// Write a JavaScript function to capitalize each word in the string. 
// Test Data :
// console.log(capitalizeWords('js string exercises'));
// "Js String Exercises"

function capitalizeWords(a){
	var splitStr = a.split(' ');
	for(var i = 0; i < splitStr.length; i++) {
		var cap = splitStr[i].charAt(0).toUpperCase();
		splitStr[i] = cap + splitStr[i].substr(1);
	}
	return splitStr.join(' ');
}

console.log(capitalizeWords('js string exercises'));