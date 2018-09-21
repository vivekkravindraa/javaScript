// Test Data : 
// console.log(last([7, 9, 0, -2])); 
// console.log(last([7, 9, 0, -2],3)); 
// console.log(last([7, 9, 0, -2],6));
// Expected Output : 
// -2 
// [9, 0, -2] 
// [7, 9, 0, -2]

function last(a,b){
	if(b === undefined) {
		return a[a.length-1];
	} else if(b >= a.length) {
        return a;
    }
    for(var i = 0; i < a.length; i++) {
        if(b !== undefined) {
            var result = a.splice(-b);
        }
    }
    return result;
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));