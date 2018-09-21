function superPower(a,b){
	if(b.length === 0) {
		return `invalid input`;
	}
	var result = a.find(function(superHero) {
		return superHero['name'] === b;
	});
	if(result) {
		return result['powers'].join(', ');
	} else {
		return `${b} is not in the super heroes list`;
	}
}

// using arrow function

function superPower(a,b){
	if(b.length === 0) {
		return `invalid input`;
	}
	var result = a.find((superHero) => {
		return superHero['name'] === b;
	});
	if(result) {
		return result['powers'].join(', ');
	} else {
		return `${b} is not in the super heroes list`;
	}
}

function superPower(a,b){
	if(b.length === 0) {
		return `invalid input`;
	}
	var result = a.find(superHero = superHero['name'] === b);
	if(result) {
		return result['powers'].join(', ');
	} else {
		return `${b} is not in the super heroes list`;
	}
}