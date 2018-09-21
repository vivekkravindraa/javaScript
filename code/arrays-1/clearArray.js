// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : clearArray([NaN, 0, 15, false, -22, '',undefined, 47, null])
// Expected result : [15, -22, 47]

function clearArray(a) {
    if(a.length === 0) {
        return 'invalid input';
    }
    var result = [];
    a.forEach(function(value) {
        if(value) {
            result.push(value);
        }
    });
    return result;
}

var a = [NaN, 0, 15, false, -22, '',undefined, 47, null];
console.log(clearArray(a));