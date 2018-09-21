// Ones and Zeros
// Given an array of one's and zero's convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

function onesAndZeros(a) {
    let binaryString = a.join('');
    let decimalConvertedRadixResult = parseInt(binaryString, 2);
    return decimalConvertedRadixResult;
}

console.log(onesAndZeros([0, 0, 0, 1]));
console.log(onesAndZeros([0, 0, 1, 0]));
console.log(onesAndZeros([0, 1, 0, 1]));
console.log(onesAndZeros([1, 0, 0, 1]));
console.log(onesAndZeros([0, 0, 1, 0]));
console.log(onesAndZeros([0, 1, 1, 0]));
console.log(onesAndZeros([1, 1, 1, 1]));
console.log(onesAndZeros([1, 0, 1, 1]));




