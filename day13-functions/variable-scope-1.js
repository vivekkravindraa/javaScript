var n1 = 10;
var n2 = 20;

function add() {
    // here we are directly able to assign new values to our global variables
    n1 = 100; // replaces the value at global n1
    n2 = 200; // replaces the value at global n2
    return n1 + n2;
}

console.log(add()); // 300
console.log(n1); // 100
console.log(n2); // 200

var a1 = 15;
var a2 = 25;

function sum() {
    var a1 = 150;
    var a2 = 250;
    return a1 + a2;
}

console.log(sum()); // 400
console.log(a1); // 15 // var a1 inside the function can't be accessed
console.log(a2); // 25 // var a2 inside the function can't be accessed

var a1 = 15;
var a2 = 25;

function addition() {
    var a1 = 150;
    var a2 = 250;
    a1 = 1500;
    a2 = 2500;
    return a1 + a2;
}

console.log(addition()); // 4000
console.log(a1); // 15 // var a1's inside the function get replaced by global a1 inside the function, can't be accessed
console.log(a2); // 25 // var a2's inside the function get replaced by global a2 inside the function, can't be accessed