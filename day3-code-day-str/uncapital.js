// Write a JavaScript function to Uncapitalize the first letter of each word of a string. 
// Test Data :
// console.log(unCap('Js String Exercises'));
// "js string exercises"

function unCap(a) {
    var splitStr = a.split(" ");
    for(var i = 0; i < splitStr.length; i++) {
        var offCap = splitStr[i].charAt(0).toLowerCase();
        splitStr[i] = offCap + splitStr[i].substr(1);
    }
    return splitStr.join(" ");
}

console.log(unCap('Js StRing ExeRcises'));