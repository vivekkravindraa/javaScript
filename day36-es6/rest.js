let fruits = ['apple','mango','banana','watermelon','jackfruit','guava'];

//es5
let f1 = fruits[0];

let f2 = [];
// f2.push(fruits[1],fruits[2],fruits[3],fruits[4]);

// for(var i = 1; i <= fruits.length; i++) {
//      f2.push(fruits[i]);
// }

// OR
f2.fruits.slice(1);

console.log(f1);
console.log(f2);

// es6

let [fruit1,fruit2,...allOtherRemainingFruits] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(allOtherRemainingFruits);
console.log(Array.isArray(allOtherRemainingFruits));        // array

// skipped a value from fruits at the first index, by giving a space
let [fru1, ,...otherFruits] = fruits;
console.log(fru1);
console.log(otherFruits);