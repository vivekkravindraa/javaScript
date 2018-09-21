// Square(n) Sum
// Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.

// For example:

// squareSum([1, 2, 2]); // should return 9

function squareSum(a) {
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
        sum = sum + a[i] * a[i];
    }
    return sum;
}

console.log(squareSum([1, 2, 2]));
console.log(squareSum([3, 3, 3]));