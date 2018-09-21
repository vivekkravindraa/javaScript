// Write a JavaScript function to test whether a string starts with a specified string. 
// Test Data :
// console.log(startsWith('js string exercises', 'js'));
// true

function startsWith(str, value) {
    isFound = false;
    var splitStr = str.split(' ');
    splitStr.forEach(function(element) {
        if(element === value) {
            isFound = true;
        }
    });
    return `${isFound}`;
}

console.log(startsWith('js string exercises', 'js')); // true