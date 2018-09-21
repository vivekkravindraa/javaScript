var product = {
    name: 'Marker',
    price: 25
}

console.log(product.name);
console.log(product['name']);

console.log(Object.keys(product));
console.log(Object.values(product));

console.log(Object.values(product).includes('camil')); // false
console.log(Object.keys(product).includes('description')); // false

console.log(product.hasOwnProperty('name')); // true

// adding a new property onto the object
product.description = 'camil';
product['company'] = 'cello';
console.log(product);

// remove a property from an object
delete product.company;
console.log(product);

// note - cannot access properties via . operator, can only be done via square brackets 
for(var key in product) {
    console.log(`${key} - ${product[key]}`);
}