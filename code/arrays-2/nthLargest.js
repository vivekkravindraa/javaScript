// Write a JavaScript function to get nth largest element from an unsorted array. 

// Test Data :
// 1. nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4);
// return 89

// 2. nthlargest([10,5,20,25],2);
// return 20

function nthLargest(a, b) {
    // if(b < 0) {
    //     return 'invalid input';
    // }
    // if(a.length === 0) {
    //     return 'empty array';
    // }
    var result = a.sort(function(c,d){
		return d-c;
	})
	for(var i = 0; i < result.length; i++) {
        if(i === b) {
            var nthLargest = result[i-1];
        }
    }
    return nthLargest;
}

// console.log(nthLargest([10,5,20,25],-1));
// console.log(nthLargest([],2));
console.log(nthLargest([43, 56, 23, 89, 88, 90, 99, 652], 4));
console.log(nthLargest([10,5,20,25],2));
console.log(nthLargest([1,2,3,4,5],3));