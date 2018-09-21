// Remove Zeros
// Create a function, removeZeros, which strips out any zeros from a number, and returns the 'stripped' number.
// So, what happens if the input is zero? That is a special case! If the input is zero, the function should return NaN, which stands for 'Not a Number'. NaN is a special value that isn't a number, but still is of type 'number'!

// INPUT: removeZeros(1023002);
// OUTPUT: 1232
// INPUT: removeZeros(6006606.203);
// OUTPUT: 6666.23
// INPUT: removeZeros(0);
// OUTPUT: NaN

function removeZeros(a){
	if(a === 0) {
		return NaN;
	}
	var myString = a.toString();
    var myArray = myString.split('');
    var resultArr = [];
	for(var i = 0; i < myArray.length; i++) {
		if(myArray[i] !== '0') {
            resultArr.push(myArray[i]);
		}
    }
    var result = resultArr.join('');
    var final = parseFloat(result);
    return final;
}
console.log(removeZeros(1023002));
console.log(removeZeros(6006606.203));
console.log(removeZeros(0));