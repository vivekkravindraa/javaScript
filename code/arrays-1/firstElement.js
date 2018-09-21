// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

function firstElements(a,b) {
    var elements = [];
    if(b === undefined) {
        return a[0];
    } else if(a.length === 0) {
        return a;
    } else if(b > a.length) {
        return a;
    } else if(b < 0) {
        return a;
    }
    for(var i = 0; i < b; i++) {
        elements.push(a[i]);
    }
    return elements;
}
console.log(firstElements([7,9,0,-2]));         // 7
console.log(firstElements([],3));               // []
console.log(firstElements([7,9,0,-2],3));       // [7,9,0]
console.log(firstElements([7,9,0,-2],6));       // [7,9,0,-2]
console.log(firstElements([7,9,0,-2],-3));      // [7,9,0,-2]

// it should return emtpy array if the input array is empty (3ms)
// it should return first element if second input is undefined (19ms)
// it should return the same array if length of second input is more than the length of the array 
// it should return the input array if the second input is negative number (1ms)
// it should return the first n elements from the array