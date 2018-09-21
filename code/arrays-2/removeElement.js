// Write a JavaScript function to remove a specific element from an array. 

// Test data :
// console.log(removeArrayElements([2, 5, 9, 6], 5));
// output - [2, 9, 6]

function removeArrayElements(a,b) {
    // var index = a.indexOf(b);
    if(a.length < 1) {
        return 'Invalid Input';
    }
    for(var i = 0; i < a.length; i++) {
        if(a[i] === b) {
            a.splice(i,1); // (index, 1);
        }
    }
    return a;
}
    
console.log(removeArrayElements([2, 5, 9, 6], 5));
console.log(removeArrayElements([2, 5, 9, 6], 10));
console.log(removeArrayElements([], 2));