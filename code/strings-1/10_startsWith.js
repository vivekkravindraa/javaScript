// Write a JavaScript function to test whether a string starts with a specified string. 
// Test Data :
// console.log(startsWith('js string exercises', 'js'));
// true

function startsWith(a,b) {
    var splitStr = a.split(' ');
    for(var i = 0; i < splitStr.length; i++) {
        if(splitStr[i] === b) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(startsWith('js string exercises', 'js'));