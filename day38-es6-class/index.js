// const Car = require('./car).Car;

// Common JS -- Module Require System
let { Car } = require('./car.js');

let c1 = new Car({name: 'Alto', make: 2010, color: 'Red', brand: 'Maruthi', fuelType: 'Petrol', seater: 5});
// console.log(c1.details());

console.log(c1.getPosition());
c1.move();
c1.move();
console.log(c1.getPosition());
c1.reverse();
console.log(c1.getPosition());
c1.reset();
console.log(c1.getPosition());

// let c2 = new Car({name: 'i10', make: 2011, color: 'Blue', brand: 'Innova', fuelType: 'Petrol', seater: 5});
// console.log(c2.details());

// let c3 = new Car({name: 'Audi', make: 2015, color: 'Black', brand: 'A4', fuelType: 'Petrol', seater: 10});
// console.log(c3.details());

// let c4 = new Car();
// console.log(c4.details());      // undefined(s)