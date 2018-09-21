// determine falsy values:

function checkType(value) {
    if(value) {
        return true;
    } else {
        return false;
    }
}

// list of falsy values in Javascript

console.log(checkType(false));
console.log(checkType(0));
console.log(checkType(''));
console.log(checkType(undefined));
console.log(checkType(null));
console.log(checkType(NaN));

// truthy values

console.log(checkType(1));
console.log(checkType(true));
console.log(checkType('dct'));