console.log(Math.max(10,30));           // 30

let numbers = [15,10,5,25,55];
console.log(Math.max(numbers));         // NaN
console.log(Math.max(15,10,5,25,55));   // 55

console.log(numbers);                   // [15,10,5,25,55]

// es6
// using gather and spread operator ... (three dots)

console.log(...numbers);                // 15 10 5 25 55
console.log(Math.max(...numbers));      // 55 ---> passing as arguments to a method

function someValues() {
    return arguments;
}

let values = ['city','name','dob','age'];
console.log(someValues(...values));     // passing as arguments to a fucntion