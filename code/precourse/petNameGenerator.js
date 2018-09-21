function petNameGenerator(a){
	var myString = '';
	if(a.length < 1) {
		return 'invalid input';
	}
	for(var i = 0; i < a.length; i++) {
		if(a[2] === 'a' || a[2] === 'e' || a[2] === 'i' || a[2] === 'o' || a[2] === 'u') {
			myString = a.slice(0,4);
		} else {
			myString = a.slice(0,3);
		}
	}
	return myString;
}

console.log(petNameGenerator('Sachin'));
console.log(petNameGenerator('Elon'));