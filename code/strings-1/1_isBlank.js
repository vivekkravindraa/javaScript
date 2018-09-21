// Write a JavaScript function to check whether a string is blank or not. 
// Test Data :
// console.log(isBlank('')); 
// console.log(isBlank('abc'));
// true 
// false

function isBlank(str) {
    if(str.length == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isBlank('')); 
console.log(isBlank('abc'));