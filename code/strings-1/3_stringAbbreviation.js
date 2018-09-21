// Write a JavaScript function to convert a string in abbreviated form. 
// Test Data :
// console.log(abbrevName("Robin Singh"));
// "Robin S."

function abbrevName(str) {
    var splitStr = str.split(' ');
    var result = `${splitStr[0]} ${splitStr[1].charAt(0)}.`;
    return result;
}

console.log(abbrevName("Robin Singh"));