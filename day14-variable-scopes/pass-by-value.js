// Whenever we pass a premitive datatype (number, string, undefined, boolean, null) as an argument to the function, the function always makes a copy of the data

var number = 10;
var name = 'Ani';
var isTrue = true;

function setNumber(number) {
    number = 100; // global varibale 'number' refers to parameter varibale '(number)'
    console.log('Inside function : ',number);
}

function setName(name) {
    name = 'Aniruddha';
    console.log('Inside function : ',name);
}

function setBoolean(isTrue) {
    isTrue = false;
    console.log('Inside function : ',isTrue);
}

console.log('Before function : ',number);
setNumber(number);
console.log('After & Outside function : ',number);

console.log('Before function : ',name);
setName(name);
console.log('After & Outside function : ',name);

console.log('Before function : ',isTrue);
setBoolean(isTrue);
console.log('After & Outside function : ',isTrue);