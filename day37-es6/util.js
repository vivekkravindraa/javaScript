// math.js can be imported to any number of files

const m = require('./math.js');                 // by variable

console.log(m.add());
console.log(m.add(10,20));

console.log(m.sub());
console.log(m.sub(20,10));

console.log(m.city);

let { add, sub, city } = require('./math.js');  // by object destructuring

console.log(add());
console.log(add(10,20));

console.log(sub());
console.log(sub(20,10));

console.log(city);   