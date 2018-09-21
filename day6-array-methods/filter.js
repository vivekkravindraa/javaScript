// Declarative Programming

var numbers = [10,15,20,25,30,35];

var result = numbers.filter(function(value) {
    return n % 2  === 0;
});
console.log(result); // [10,20,30]

var greater25 = numbers.filter(function(value) {
    return n > 25;
});
console.log(greater25); // [30,35]

var greater250 = numbers.filter(function(value) {
    return n > 250;
});
console.log(greater250); // []

// node JS / React JS -> arrow function
// var evens = numbers.filter(n => n % 2 === 0);
// console.log(evens);