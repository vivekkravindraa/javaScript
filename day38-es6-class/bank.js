let { Customer } = require('./customer');

let c1 = new Customer('rakesh','SBI123',1500);
console.log(c1.currentBalance());
console.log(c1.transaction(1, 500));
console.log(c1.currentBalance());

let c2 = new Customer('madhuri','SBI124',500);
console.log(c2.currentBalance());
console.log(c2.transaction(0, 700));
console.log(c2.currentBalance());