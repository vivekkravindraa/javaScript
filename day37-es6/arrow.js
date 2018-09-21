// function declaration

function sum() {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments);
}
sum(10,20);

// function expression

var sum = function() {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments);
}
sum(10,20);

// es6
let total = (n1,n2) => {
    // argument object refers to the arguments for the main function and not the 'total' or the called function
    // console.log(arguments);
    console.log(n1,n2);
}
total(10,20);