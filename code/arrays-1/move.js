// Write a JavaScript function to move an array element from one position to another. 

// Test Data :
// 1. move([10, 20, 30, 40, 50], 0, 2);
// return [20, 30, 10, 40, 50]

// 2. move([10, 20, 30, 40, 50], 1, 2);
// return [10, 30, 20, 40, 50]

function move(a,b,c){
	var remove = [];
	if(a.length === 0) {
		return 'empty array';
	} else if(b > a.length){
		return 'element not present at the given index';
	}
	remove = a.splice(b,1);
	var move = a.splice(c,0,remove[0]);
	return a;
}

console.log(move([],0,1));
console.log(move([10,20,30,40,50],6));
console.log(move([10,20,30,40,50],0,2));
console.log(move([10,20,30,40,50],1,2));

// it should return text "empty array" if input array is empty (10ms)
// it should return text "element not present at the given index" if the value of the second input index is not defined (1ms)
// it should return an array with the element moved from value of first input index to the value of second input index (8ms)