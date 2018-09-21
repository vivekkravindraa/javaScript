// Write a JavaScript function to find the unique elements from two arrays. 

// Test Data :
// 1. difference([1, 2, 3], [100, 2, 1, 10]);
// return ["1", "2", "3", "10", "100"]

// 2. difference([1, 2, 3], [100, 2, 1, 10]); 
// return ["1", "2", "3", "10", "100"]

function difference(a,b) {
	if(a.length === 0 && b.length === 0){
		return 'empty array';
	}
    
    var resultArr=[];
    
    a.forEach(function(aNum) {
        resultArr.push(aNum);
    });
    b.forEach(function(bNum) {
        if(resultArr.indexOf(bNum) === -1) {
            resultArr.push(bNum);
        }
    });
    return resultArr.sort(function(a,b) {
       return a-b;
    });
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));