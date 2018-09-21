// Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.
// numStringRange('a', "z", 2);
// return ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
function numStringRange(a1, a2, n) {
    var range = [];
    if ((n === 0) || (typeof a1 == "undefined" || typeof a2 == "undefined") || (typeof a1 != typeof a2)) {
        return false;
    }
    if (a2 < a1) { n = -n; }
    if (typeof a1 == "number") {
        while (n > 0 ? a2 >= a1 : a2 <= a1) {
            range.push(a1);
            a1 += n;
        }
    } 
    else if (typeof a1 == "string") {   
        if (a1.length != 1 || a2.length != 1) {
            throw TypeError("Strings with one character are supported.");
        }
        a1 = a1.charCodeAt(0);
        a2 = a2.charCodeAt(0);

        while (n > 0 ? a2 >= a1 : a2 <= a1) {
            range.push(String.formCharCode(a1));
            a1 += n;
        }
    }
    else { throw TypeError("Only string and number are supported"); }
    return range;
}
console.log(numStringRange('a', 'z', 2));