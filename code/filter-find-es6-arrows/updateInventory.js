function updateInventory(currentInventory, newInventory) {
	newInventory.forEach(function(newItem) {
		var result = currentInventory.find(function(currentItem) {
			return newItem.name === currentItem.name;
		});
		if(result === undefined) {
			currentInventory.push(newItem);
		} else {
		result.stock = result.stock + newItem.stock;
		}
	});
	return currentInventory;
}

// using arrow function

function updateInventory(currentInventory, newInventory) {
	newInventory.forEach(function(newItem) {
		var result = currentInventory.find((currentItem) => {
			return newItem.name === currentItem.name;
		});
		if(result === undefined) {
			currentInventory.push(newItem);
		} else {
		result.stock = result.stock + newItem.stock;
		}
	});
	return currentInventory;
}

function updateInventory(currentInventory, newInventory) {
	newInventory.forEach(function(newItem) {
		var result = currentInventory.find(currentItem => newItem.name === currentItem.name);
		if(result === undefined) {
			currentInventory.push(newItem);
		} else {
		result.stock = result.stock + newItem.stock;
		}
	});
	return currentInventory;
}