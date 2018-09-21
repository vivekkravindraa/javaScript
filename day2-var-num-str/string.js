var firstName = 'Vivek';
var state = 'KarNataka';
var city = 'Bangalore';
var password = 'secret123';
var sentence = 'Make in India. Make in Bangalore.';

console.log(password.length);               // 9
console.log(firstName.toUpperCase());       // 'VIVEK'
console.log(state.toLowerCase());           // 'karnataka'

console.log(sentence.indexOf('Make'));      // 0
console.log(sentence.indexOf('USA'));       // -1
console.log(sentence.lastIndexOf('Make'));  // 15
console.log(firstName.charAt(3));           // 'e'

console.log(sentence.includes('India'));    // true

console.log('hi'.repeat(4));                // 'hihihihi'

console.log(firstName.slice(0,3));          // 'Viv'
console.log(firstName.slice(2));            // 'vek'
console.log(firstName.slice(2,4));          // 've'

console.log(firstName.substr(2,3));         // 'vek'

var phone = '1234567890';
var firstThree = phone.slice(0,3);          // '123'
var secondThree = phone.slice(3,6);         // '456'
var lastThree = phone.slice(6);             // (6,10)

console.log(`(${firstThree}) ${secondThree}-${lastThree}`);