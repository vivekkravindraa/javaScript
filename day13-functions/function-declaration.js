console.log(name); // undefined
var name = 'Ani';

function hello() {
    return 'Hello there';
}

console.log(hello); // reference error
console.log(hello()); // invokes or calls the function

function greeting(name) { // name - parameter, are also local variables that can be used within a function
    return 'Hi ' + name;
}
console.log(greeting('Vivek')); // 'Vivek' - argument

// demonstrates that we can pass a variable as an argument to the function call, and also we can have different names for our parameter and our argument
function sayHi(firstName) {
    return 'Hi ' + firstName;
}

var name = 'Ani';
console.log(sayHi(name));

// demonstrates that we can pass a variable as an argument to the function call, and also we can have same names for our parameter and our argument
function sayHello(name) {
    return 'Hi ' + name;
}

var name = 'Vivek';
console.log(sayHello(name));