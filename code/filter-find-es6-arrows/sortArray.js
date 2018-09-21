function sortArrayOfObjects(a){
	if(a.length < 1) {
		return [];
	}
	var result = a.sort(function(b,c) {
		return c.libraryID - b.libraryID;
	});
	return result;
}

// using arrow function

function sortArrayOfObjects(a){
	if(a.length < 1) {
		return [];
	}
	var result = a.sort((b,c) => {
		return c.libraryID - b.libraryID;
	});
	return result;
}

function sortArrayOfObjects(a){
	if(a.length < 1) {
		return [];
	}
	var result = a.sort((b,c) => c.libraryID - b.libraryID);
	return result;
}
