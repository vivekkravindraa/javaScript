// Find the unique number
// Write a function called findUnique which returns the only unique number from an array.

// All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.

// Input: [ 1, 8, 4, 4, 6, 1, 8 ]
// Output: 6


function findUnique(a){
    var myString = '';
    if(a.length < 1) {
        return null;
    }
    for(var i = 0; i < a.length; i++) {
        if(a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
            myString = myString + a[i];
        }
    }
    return Number(myString);
}

console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8 ]));