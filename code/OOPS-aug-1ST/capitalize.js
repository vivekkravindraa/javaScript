// Capitalize each Word
// Write a JavaScript function to capitalize each word in the string. 
// Test Data :
// console.log(capitalizeWords('js string exercises'));
// "Js String Exercises"

class Capital {
	constructor(str) {
		this.str = str;
	}
	capitalizeWords() {
		if(this.str.length === 0) {
			return 'empty string';
		}
		var array = [];
		var words = this.str.split(' ');
		words.forEach(function(word) { 
			array.push(word.charAt(0).toUpperCase() + word.slice(1));
		})
		return array.join(' ');
	}
}
function capitalizeWords(a){
	var capital = new Capital(a);
	return capital.capitalizeWords();
}

console.log(capitalizeWords('js string exercises'));