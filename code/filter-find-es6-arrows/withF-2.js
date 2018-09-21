function findProduct(a,b){
	var result = a.find(function(product) {
		return product.id === b;
	});
	if(!result) {
		return `No product found with id = ${b}`;
	} else {
		return result;
	}
}

// using arrow functions

function findProduct(a,b){
	let result = a.find((product) => {
		return product.id === b;
	});
	if(!result) {
		return `No product found with id = ${b}`;
	} else {
		return result;
	}
}

function findProduct(a,b){
	let result = a.find(product => product.id === b);
	if(!result) {
		return `No product found with id = ${b}`;
	} else {
		return result;
	}
}