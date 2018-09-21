// Complete the solution. It should try to retrieve the value of the array at the index provided.
// If the index is out of the array's max bounds then it should return the default value instead.

// Example:

// data = ['a', 'b', 'c']
// solution(data, 1, 'd') # should == 'b'
// solution(data, 5, 'd') # should == 'd'

function findSolution(a,b,c) {
    if(b < a.length) {
        for(var i = 0; i < a.length; i++) {
            return a[b];
        }
    } else if(b >= a.length) {
        return c;
    }
}

var data = ['a', 'b', 'c'];
console.log(findSolution(data, 1, 'd'));
console.log(findSolution(data, 5, 'd'));