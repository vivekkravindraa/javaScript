var n1 = 10, n2 = 12.3, n3 = 13.7;
console.log(typeof n1);             // Number
console.log(typeof n2);             // Number
console.log(typeof n3);             // Number

// Math obj

console.log(Math.PI);               // 3.1415
console.log(Math.round(n2));        // 12
console.log(Math.pow(2,3));         // 8
console.log(Math.sqrt(9));          // 3
console.log(Math.abs(-100));        // 100
console.log(Math.ceil(n2));         // 13
console.log(Math.floor(n3));        // 13
console.log(Math.min(10,20,30));    // 10
console.log(Math.max(10,20,30));    // 30
console.log(Math.random());         // returns a random digit

// Type Conversions

var a = '10', b = 15.5, c = 21, d = 16.6;
console.log(a + b);                 // '1015.5'
console.log(typeof a);              // String
console.log(Number(a) + b);         // 25.5
console.log(parseInt(a) + b);       // 25.5

console.log(Number.parseInt(d));    // 16
console.log(Number.parseFloat(d));  // 16.6

console.log(String(b));             // '15.5'
console.log(String(c));             // '21'

// + Operator

console.log(5 + 5);                 // 10
console.log('Hello ' + 'World');    // 'Hello World'
console.log(5 + '5');               // '55'
console.log(5 + 5  + '5');          // '105'
console.log(5 + '5' + 10);          // '5510'
console.log('5' + 10 + 15);         // '51015'
console.log('5' + (10 + 5));        // '515'

// DOM Manipulation

var numbers = '10 20 30';
console.log(numbers.split(' '));    // [ '10', '20', '30']
console.log(parseInt(numbers));     // 10
console.log(parseFloat(numbers));   // 10
console.log(Number(numbers));       // NaN

var numbers = [];
console.log(numbers.length);        // length property
numbers.push(10);                   // push method
numbers.pop();                      // pop method