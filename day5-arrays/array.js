var numbers = [1,2,3,4,5,6,7,8,9,0];
// '(123) 456-7890'
var firstThree = numbers.slice(0,3);
// console.log(firstThree); // [1, 2, 3]
console.log(firstThree.join(''));
var secondThree = numbers.slice(3,6);
console.log(secondThree.join(''));
var lastFour = numbers.slice(6);
console.log(lastFour.join(''));

console.log(`(${firstThree.join('')}) ${secondThree.join('')}-${lastFour.join('')}`)

// console.log(`(${numbers.slice(0,3).join('')}) . . . `)

var names = ['ramesh','ganesh','suresh','ganesh'];
var odds = [15,25];
var evens = [10,20];
var numbers = evens.concat(odds);
console.log(numbers);

console.log(names.indexOf('ganesh')); // 1
console.log(names.indexOf('ani')); // -1
console.log(names.lastIndexOf('ganesh')); // 3

if(names.indexOf('ganesh') === names.lastIndexOf('ganesh')) {
    console.log('unique');
} else {
    console.log('repeated');
}

if(names.indexOf('suresh') === names.lastIndexOf('suresh')) {
    console.log('unique');
} else {
    console.log('repeated');
}