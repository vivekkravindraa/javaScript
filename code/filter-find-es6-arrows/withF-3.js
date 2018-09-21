function findProductByPriceRange(a,b,c){
	var result = a.filter(function(product) {
		return product.price > b && product.price < c;
	});
	return result;
}

// using arrow functions

function findProductByPriceRange(a,b,c){
	let result = a.filter((product) => {
		return product.price > b && product.price < c;
	});
	return result;
}

function findProductByPriceRange(a,b,c){
	let result = a.filter(product => product.price > b && product.price < c);
	return result;
}