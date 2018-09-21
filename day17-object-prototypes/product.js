function Product(name, price) {
    this.name = name;
    this.price = price;
    // this.details = function() {
    //     return `${this.name} - INR ${this.price}`
    // }
}

// Adding a method to the  Object-Prototype/Constructor-Function which applies to all the objects.

Product.prototype.details = function() {
    return `${this.name} - INR ${this.price}`;
}

var p1 = new Product('Camlin',25);
console.log(p1.details());
var p2 = new Product('Marker',30);
console.log(p2.details());
var p3 = new Product();
console.log(p3.details()); // undefined - INR undefined

// Adding a property to the Object-Prototype/Constructor-Function which applies to all the objects.

Product.prototype.isFeatured = true;

console.log(p1.isFeatured);
console.log(p2.isFeatured);
console.log(p3.isFeatured);