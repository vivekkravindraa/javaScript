// Any variable defined outside of a function, is a global variable in javascript

var name = 'Vivek';

function sayHello() {
    return 'Hi ' + name;
}

console.log(sayHello());

function person() {
    // a variable defined inside a function, its availability is only within the function, these variables cannot be accessed outside the function
    // in javascript variables are function scoped
    var city = 'Bangalore';
    console.log(city);
}

person();
//console.log(city); // cannot access the city variable that has been defined inside the person function 

function movie() {
    // if variables are defined without a keyword var, they become global variable and are available outside the function
    actor = 'Jackie Chan';
    console.log(actor);
}

movie();
console.log(actor);