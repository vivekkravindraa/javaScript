// Write a JavaScript function to chop a string into chunks of a given length. 
// Test Data :
// console.log(stringChop('resource')); 
// return ["resource"]

// console.log(stringChop('resource',2)); 
// return [ "re", "so", "ur", "ce"] 

// console.log(stringChop('dcresource',3));
//  return ["dcr", "eso", "urc", "e"]

function stringChop(a,b) {
	var myArray = [];
	if(b === undefined) {
		return [a];
	}
	for(var i = 0; i < a.length; i+=b) {
		var chops = a.substr(i,b);
		myArray.push(chops);
	}
	return myArray;
}

console.log(stringChop('resource'));
console.log(stringChop('resource',2)); 
console.log(stringChop('dcresource',3));