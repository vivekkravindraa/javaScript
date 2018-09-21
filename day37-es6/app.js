const g = require('./greet');

console.log(g.hello());
console.log(g.goodAfternoon());
console.log(g.goodEvening());
console.log(g.description);

let { hello, goodAfternoon, goodEvening, description } = require('./greet');

console.log(hello());
console.log(goodAfternoon());
console.log(goodEvening());
console.log(description);