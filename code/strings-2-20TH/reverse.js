// Reverse a String
// Create the function reverseString that reverses a string, and returns the value of the reversed string.

// NOTE: Do not use the built-in Array .reverse() method!

// Examples:

// INPUT: reverseString("hello");
// OUTPUT: 'olleh'
// INPUT: reverseString('Greetings from the moon!');
// OUTPUT: '!noom eht morf sgniteerG'

function reverseString(str) {
    var newString = '';
    // str.length = 5
    // i = str.length - 1, (decrement) i--, till i >= 0
    for(var i = str.length - 1; i >= 0; i--) {
        newString = newString + str[i];
    }
    return newString;
}

console.log(reverseString("hello"));
console.log(reverseString('Greetings from the moon!'));

// For each iteration: i = str.length - 1 and newString = newString + str[i]
// First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
// Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
// Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
// Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
// Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"