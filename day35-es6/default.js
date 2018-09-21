// setting default parameters values to a function
// <= es5 - 2014

function add(n1,n2) {
    console.log(n1);
    console.log(n2);
    var n1 = (typeof n1 !== 'undefined') ? n1 : 0; 
    var n2 = (typeof n2 !== 'undefined') ? n2 : 0;
    return n1 + n2; 
}

console.log(add(10,20));    // 30
console.log(add());         // NaN

// es6

function sum(n1 = 0, n2 = 0) {
    console.log(n1);
    console.log(n2);
    return n1 + n2;
}

console.log(sum(10,20));    // 30
console.log(sum());         // 0
console.log(sum(15));       // 15