// An object is an unordered, key indexed, collection of values.

var productArr = ['Marker',25,5,'Camil'];

var product = {
    name: 'Marker',
    price: 25,
    units: 5,
    marker: 'Camil'
};

console.log(product['name']);
console.log(product.name);

var player = {name: 'Virat', captain: true, battingAvg: 57.05, country: 'India', age: 30};

console.log('Name',player.name);
console.log('Captain',player.captain);
console.log('Batting Average',player.battingAvg);
console.log('Country',player.country);
console.log('Age',player.age);

console.log(typeof productArr);
console.log(typeof player);
console.log(Array.isArray(productArr));
console.log(Array.isArray(player));