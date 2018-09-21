// Title: Find a word
// Total Test Cases: 2

// Body:

// Write a JavaScript function to find a word within a string. 
// Test Data :
// console.log(findWord('The quick brown fox', 'fox')); 
// console.log(findWord('aa bb cc dd aa', 'aa'));
// Output : 
// "'fox' was found 1 times." 
// "'aa' was found 2 times."

function findWord(a, b) {
    var result = a.split(' ');
    var count = 0;
    for(var i = 0; i < result.length; i++) {
        if(result[i] === b) {
            count++;
        }
    }
    return `${b} was found ${count} times.`;
}

console.log(findWord('The quick brown fox', 'fox')); 
console.log(findWord('aa bb cc dd aa', 'aa'));