// Fake Binary
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// TEST Case
// 1. fakeBinary('3457') returns '0011'
// 2. fakeBinary('1234') returns '0000'

class Binary {
	constructor(str) {
		this.str = str;
	}
	fakeBinary() {
		var myString = '';
		for(var i = 0; i < this.str.length; i++) {
			if(this.str[i] < '5') {
				myString = myString + '0';
			} else {
				myString = myString + '1';
			}
		}
		return myString;
	}
}

function fakeBinary(a){
	var fake = new Binary(a);
	return fake.fakeBinary();
}

console.log(fakeBinary('3457'));
console.log(fakeBinary('1234'));
