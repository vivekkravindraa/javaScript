// Body:

// Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// strCount('Hello', 'o') // => 1
// strCount('Hello', 'l') // => 2
// strCount('', 'z') // => 0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

function strCount(a,b) {
    var count = 0;
    if(a.length < 1) {
        return 0;
    }
    var splitStr = a.split('');
    for(var i = 0; i < splitStr.length; i++) {
        if(splitStr[i] === b) {
            count++
        }
    }
    return count;
}

console.log(strCount('Hello', 'o')); // => 1
console.log(strCount('Hello', 'l')); // => 2
console.log(strCount('', 'z')) // => 0