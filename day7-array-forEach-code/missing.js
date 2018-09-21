/*
Missing number in array
Given an array of size n-1 and given that there are numbers from 1 to n with one number missing, the missing number is to be found.
*/
// Input [1,2,3,5]

function findMissing(numbers) {
    for(var i = 0; i < numbers.length - 1; i++) {
        if(numbers[i+1] - numbers[i] !== 1) {
            return numbers[i] + 1;
        }
    }
}

var numbers = [1,2,3,5];
console.log(findMissing(numbers));