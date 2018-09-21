function findNotBookedTables(cafe) {
    var myArray = [];
    if(a.length < 1) {
        return 'empty array';
    }
    for(var i = 0; i < cafe.length; i++) {
		if(cafe[i] === 'not booked') {
			myArray.push(i);
		}
    }
    return myArray;
}

console.log(findNotBookedTables(["not booked", "booked", "booked", "not booked", "not booked"]));