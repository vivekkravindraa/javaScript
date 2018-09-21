// Write a function isDivisible that accepts two numbers and returns true if the first number is cleanly divisible by the second, and false if not.

// Examples:

// INPUT: isDivisible(9, 3);
// OUTPUT: true
// INPUT:isDivisible(9, 4);
// OUTPUT:false

function isDivisible(a, b) {
    if(a % b === 0) {
        return true;
    } else if(a % b !== 0) {
        return false;
    }
}

console.log(isDivisible(9,3));
console.log(isDivisible(9,4));
console.log(isDivisible(12,2));
console.log(isDivisible(10,2));
console.log(isDivisible(9,2));