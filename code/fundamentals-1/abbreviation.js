function abbreviate(str) {
    if(str.length < 1) {
        return str;
    }
	var myString = '';
	var splitStr = str.split(' ');
	myString = myString + splitStr[0].charAt(0)+'.'+splitStr[1].charAt(0);
	return myString;
}

console.log(abbreviate('Sam Harris'));
console.log(abbreviate('Patrick Feeney'));
console.log(abbreviate(''));