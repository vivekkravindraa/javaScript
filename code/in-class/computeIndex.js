// There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.

// Sample array : 
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];

// Expected Output : 
// [4, 5, 8, 10, 12, 13]

function computeIndex(a,b) {
    var sum = 0;
    var sumArray = [];
    for(var i = 0; i < a.length; i++) {
        for(var j = 0; j < b.length; j++) {
            sum = a[i] + b[i];
        }
        sumArray.push(sum);
    }
    if(b.length > a.length) {
        result = b.splice(a.length);
        sumArray.push(result[0]);
    }
    return sumArray;
}

var array1 = [1,0,2,3,4];
var array2 = [3,5,6,7,8,13];
console.log(computeIndex(array1,array2));