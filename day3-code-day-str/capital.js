// Write a JavaScript function to capitalize the first letter of each word of a string. 
// Test Data :
// console.log(unCap('js string exercises'));
// "Js String Exercises"

function Cap(a) {
    var splitStr = a.split(" ");
    for(var i = 0; i < splitStr.length; i++) {
        var toCap = splitStr[i].charAt(0).toUpperCase();
        splitStr[i] = toCap + splitStr[i].substr(1);
    }
    return splitStr.join(" ");
}

console.log(Cap('js stRing exeRcises'));