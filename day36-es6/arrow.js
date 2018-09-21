var fruits = ['apple','mango','watermelon','banana'];

// es5
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// es6
fruits.forEach((fruit) => {
    console.log(fruit);
});

// incase of only one arg to the function eliminate round brackets
fruits.forEach(fruit => {
    console.log(fruit);
});

// incase of two args to the function use round brackets
fruits.forEach((fruit, index) => {
    console.log(fruit, index);
});

// incase of only one statement to be executed inside the function, eliminate the flower brackets
fruits.forEach(fruit => console.log(fruit));

let numbers = [10,20,30,40,50];
// let result = numbers.filter(function(n) {
//      return n > 25;
// });

// es6 allows us to remove the return keyword for a single line statement
let result = numbers.filter(n => n > 25);
console.log(result);

// arrow functions will ALWAYS be anonymous function, hence we use function expression

// function declaration cannot be used as arrow functions
function add() {
    
}

// function expressions can be converted to arrow functions
// var add = function() {

// }
var add = () => {

}