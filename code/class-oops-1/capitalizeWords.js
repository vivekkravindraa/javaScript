// function capitalizeWords(str) {
// 	var myArray = [];
// 	var array = str.split(' ');
// 	array.forEach(function(word) {
// 		myArray.push(word.charAt(0).toUpperCase() + word.slice(1));
// 	})
// 	return typeof myArray.join(' ');
// }

// console.log(capitalizeWords('js string exercises'));

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