// function declaration

function sum(n1,n2) {
    return n1 + n2;
}

console.log(sum(10,20));

// function expression

var sum = function(n1, n2) {
    return n1 + n2;
}

console.log(sum);
console.log(sum(10,20));

// create a function called as findTotal (which will be a function expression) to which you pass an array of values; the function should return the sum of the array

var findTotal = function(values) {
    var sum = 0;
    // for(var i = 0; i < values.length; i++) {
    //    sum = sum + value[i];
    // }
    values.forEach(function(value) {
        sum = sum + value;
    });
    return sum;
}

console.log(findTotal([10,20,30]));