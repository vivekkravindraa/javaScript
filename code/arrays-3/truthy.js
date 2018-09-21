// Write a function that accepts three arguments and returns true if only one of those arguments is truthy, and false if not.

// INPUT: onlyOne(false, false, true)
// OUTPUT: true
// INPUT: onlyOne(0, 1, 2)
// OUTPUT: false

function onlyOne(a, b, c) {
    if(a === b || b === c || c === a) {
        return true;
    } else {
        return false;
    }
}

console.log(onlyOne(false,false,true));
console.log(onlyOne(0,1,2));
console.log(onlyOne(0,'vivek',false));