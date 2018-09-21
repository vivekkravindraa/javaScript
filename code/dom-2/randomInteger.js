// Write a JavaScript function to generate a random integer.

function rand(min,max) {
    if(min == undefined && max == undefined) {
        return 0;
    }
    else if (max == undefined) {
        return 1; 
    }
    else {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

console.log(rand());
console.log(rand(6));
console.log(rand(1,10)); 
console.log(rand(20,1));
// 15
// 5 
// 1 
// 0