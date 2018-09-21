// Write a JavaScript function to check whether an `input` is a string or not. 
// Test Data :
// console.log(is_string('dctacademy')); 
// true
// console.log(is_string([1, 2, 4, 0]));
// false

function isString(a) {
    if(typeof a === 'string') {
        return true;
    } else {
        return false;
    }
}

console.log(isString('dctacademy'));
console.log(isString([1, 2, 4, 0]));