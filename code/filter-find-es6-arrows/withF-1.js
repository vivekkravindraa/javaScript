function findByCategory(a,b){
	var result = a.filter(function(product) {
		return product.category === b;
	});
	return result;
}

// using arrow function

function findByCategory(a,b){
	let result = a.filter((product) => {
		return product.category === b;
	});
	return result;
}

function findByCategory(a,b){
	let result = a.filter(product => product.category === b);
	return result;
}