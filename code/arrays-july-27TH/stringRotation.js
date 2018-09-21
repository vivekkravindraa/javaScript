// String Rotations
// Create a function that accepts a string argument and returns an array of strings, which are shifted versions of the argument string.
// As you can see from the example above, each element shifts the first character of the previous version to the end.
// The original string should be included in the output array. The order matters; each element of the output array should be the shifted version of the previous element.
// The output array should have the same length as the input string. 
// The function should return an empty array when a zero-length String is provided as the argument.

// Sample Input : "Hello"
// Sample Output : ["elloH", "lloHe", "loHel", "oHell", "Hello"]

function rotateStr(a){
	let myArray = [];
    let myString = a.charAt(0).toUpperCase() + a.slice(1);
	for(let i = 0; i < myString.length; i++) {
        let sliceOne = myString.slice(0,1);
        let sliceRest = myString.slice(1) + sliceOne;
        console.log(sliceRest);
		myString = sliceRest;
		myArray.push(myString);
	}
	return myArray;
}

console.log(rotateStr('Hello'));