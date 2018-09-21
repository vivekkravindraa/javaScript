function sayAgain(a,b) {
	var myString = '';
	for(var i = 0; i < b; i++) {
		myString = myString + a;
	}
	return myString;
}

console.log(sayAgain("hi", 4));
console.log(sayAgain("hi", 0));
console.log(sayAgain("ok", 6));