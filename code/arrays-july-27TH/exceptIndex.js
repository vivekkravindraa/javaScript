// Get all array elements except those with specified indexes

// Extend the Array prototype/class with a function to return all elements of that array, except the ones with the indexes passed in the parameter.
// The function should accept either an array or a single integer as parameters, like this:

// var array = ['a', 'b', 'c', 'd', 'e'];
// var array2 = array.except([1,3]);
// array2 should contain ['a', 'c', 'e']
// OR 
// var array = ['a', 'b', 'c', 'd', 'e'];
// var array2 = array.except(1);
// array2 should contain ['a', 'c', 'd', 'e']

function arrayExcept(a,b) {
    
}

var array = ['a', 'b', 'c', 'd', 'e'];
var array2 = array.except([1,3]);
// var array2 = array.except(1);
console.log(array,...array2);