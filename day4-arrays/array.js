// An array is an ordered, integer index and collection of values.
var players1 = 'sachin';
var players2 = 'dhoni';
var players3 = 'virat';
var players4 = 'rahul'; // what if there's 100's of players ?

// object
var player = {

};

// array
var players = [];

console.log(player); // {}
console.log(players); // []
console.log(typeof players); // 'object'
console.log(typeof player); // 'object'
console.log(Array.isArray(players)); // true
console.log(Array.isArray(player)); // false

var dream11 = ['sachin','dhoni','virat','rahul','zaheer'];
console.log(dream11);
console.log(dream11[0]); // 'sachin'
console.log(dream11[1]); // 'dhoni'
console.log(dream11[2].toUpperCase()); // 'VIRAT'
console.log(dream11[10]); // undefined

console.log(dream11);
dream11[4] = 'kumble';
console.log(dream11);

console.log(dream11.push('sehwag'));
console.log(dream11);

// last index will always be ---> array length - 1

console.log('total players', dream11.length);

dream11[dream11.length] = 'dawan';
console.log(dream11);

var numbers = [10,20,30];
console.log(numbers.reverse());
console.log(dream11.sort());

console.log(dream11);

var names = new Array(); // names = []
console.log(names);

var names = new Array(2);
console.log(names);
console.log(names[0]); // undefined
console.log(names[1]); // undefined

// Javascript constructor accepts 2 arguments. Single argument will returns undefined(s).

var names = new Array(2, 'anonymous');
console.log(names); // [2, 'anonymous']

var numbers = new Array(10);
console.log(numbers);
numbers.fill(10);
console.log(numbers);

console.log(dream11);
// pop is used to remove the element from the end of the array
console.log(dream11.pop(3)); // 'virat'
console.log(dream11);
// push is used to add the element to the end of the array
console.log(dream11.push('rohit')); // 7
console.log(dream11);
// shift is used to remove the element from the beginning of the array
console.log(dream11.shift()); // 'dawan'
console.log(dream11);
// unshift is used to add the element to the beginning of the array
console.log(dream11.unshift('raina')); // 7
console.log(dream11);
// splice is used to add / remove the element from or to a certain index
// splice with 3 arguments used to add
dream11.splice(1, 0, 'virat'); // adds a new element to a certain index
console.log(dream11);
dream11.splice(3, 2); // removes the element(s) at a certain index
console.log(dream11);