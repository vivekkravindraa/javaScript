// requiring functions and property varibales by using a variable

const m = require('./math.js');     // OR const m = require('./math');

console.log(m.add());
console.log(m.add(10,20));

console.log(m.sub());
console.log(m.sub(20,10));

console.log(m.city);

// requiring functions/methods and property variables using object destructuring

let { add, sub, city } = require('./math.js');

console.log(add());
console.log(add(10,20));

console.log(sub());
console.log(sub(20,10));

console.log(city);   