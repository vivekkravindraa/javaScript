// Write a function that accepts and array of numbers and returns and array of arrays. The first array in the return array should include all the even numbers from the argument array. The second array in the return array should include all odd numbers.

// Examples

// INPUT: evenOdd([1,2,3,4,5,6]);
// OUTPUT: [ [2,4,6], [1,3,5] ]

function evenOdd(a){
	const evenNum = [];
	const oddNum = []
    if(a.length < 1) {
        return 'empty array';
    }
    a.forEach(function(num) {
        if(num % 2 === 0) {
            evenNum.push(num);
        } else {
            oddNum.push(num);
        }
    });
    return [evenNum, oddNum];
}

console.log(evenOdd([1,2,3,4,5,6]));