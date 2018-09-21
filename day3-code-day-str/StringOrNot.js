// Write a JavaScript function to check whether an `input` is a string or not. 
// Test Data :
// console.log(is_string('dctacademy')); 
// true
// console.log(is_string([1, 2, 4, 0]));
// false

function is_string(value) {
    isCorrect = false;
    if(typeof value === 'string') {
        return true;
    } else {
        return false;
    }
}

console.log(is_string('dctacademy'));
console.log(is_string([1, 2, 4, 0]));