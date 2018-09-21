const { Counter } = require('./counter');

let c1 = new Counter();
console.log(c1.up());    // 1
console.log(c1.up());    // 2

console.log(c1.down());  // 1
console.log(c1.down());  // 0
console.log(c1.down());  // 0

console.log(c1.up());    // 1
console.log(c1.up());    // 2

console.log(c1.reset()); // 0