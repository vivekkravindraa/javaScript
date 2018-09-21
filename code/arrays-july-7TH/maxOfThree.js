// Max Of Three
// Create the function maxOfThree that evaluates three numbers and returns the largest number out of the three.

// EXAMPLES:

// 10 is the largest number out of the 3 number arguments

// INPUT: maxOfThree(5,4,10);
// OUTPUT: 10
// Two 7's are passed in as values, 7 is also the largest value

// INPUT: maxOfThree(7,7,4);
// OUTPUT: 7

function maxOfThree(a,b,c) {
    return Math.max(a,b,c);
}
console.log(maxOfThree(5,4,10));
console.log(maxOfThree(7,7,4));
