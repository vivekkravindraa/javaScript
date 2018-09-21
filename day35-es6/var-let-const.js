// <= 2014

function countVowels(str) {
    const vowels = ['a','e','i','o','u'];   // value will not change
    let count = 0;                          // value will change
    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels('hello')); // 2

// var pi = Math.PI;
// console.log(pi);     // 3.141592653589793
// pi = Math.PI * 2;    // 'var' allows us to reassign
// console.log(pi);     // 6.283185307179586

const pi = Math.PI;     // if => var pi is declared, then -> Identifier 'pi' has already been declared
console.log(pi);        // 3.141592653589793 
// pi = Math.PI;        // TypeError: Assignment to constant variable 
// console.log(pi);

let speed = 62;
console.log(speed);     // 62
speed++;
console.log(speed);     // 63

// var a = 1
// a = 2
// var a = 3

// let a = 1
// a = 2
// let a = 3        // SyntaxError: Identifier 'a' has already been declared

// const a = 1
// a = 2            // TypeError: Assignment to constant variable
// const a = 3      // SyntaxError: Identifier 'a' has already been declared