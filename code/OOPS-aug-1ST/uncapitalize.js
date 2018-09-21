// Uncapitalize each word
// Write a JavaScript function to Uncapitalize the first letter of each word of a string. 
// Test Data :
// console.log(unCap('Js String Exercises'));
// "js string exercises"

class Uncapital {
	constructor(str) {
		this.str = str;
	}
	unCap() {
		var array = [];
		var words = this.str.split(' ');
		words.forEach(function(word) {
			array.push(word.charAt(0).toLowerCase() + word.slice(1));
		})
		return array.join(' ');
	}
}

function unCap(a){
	var unC = new Uncapital(a);
	return unC.unCap();
}

console.log(unCap('Js String Exercises'));