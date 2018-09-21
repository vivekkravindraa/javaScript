// Body:

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// 1. sumPos([1,-4,7,12]) returns 20

// 2. sumPos([]) returns 0

// Note: if there is nothing to sum, the sum is default to 0.

function sumPos(a) {
    var sum = 0;
    if(a.length < 1) {
        return 0;
    }
    for(var i = 0; i < a.length; i++) {
        if(a[i] >= 0) {
            sum = sum + a[i];
        }
    }
    return sum;
}

console.log(sumPos([1,-4,7,12]));
console.log(sumPos([]));