// Isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case

// Approach 1:

// function isIsogram(inputString) {
//     if (typeof inputString === undefined)
//     { return true; }
//     var lowerCaseString = inputString.toLowerCase();
//     var counts = {};
//     let passing = true;
//     for (i = 0; i <= lowerCaseString.length; i++) {
//         var letter = lowerCaseString.charAt(i);
//         if(counts[letter]) {
//             counts[letter] = 1 + counts[letter];
//         } else {
//             counts[letter] = 1;
//         }
//         // console.log(counts);
//         if(counts[letter] > 1) {
//             return passing = false
//         }
//     }
//     return passing;
// }

// Approach 2:

// let isIsogram = (str) => str.split("").every((c, i) => str.indexOf(c) == i);

// console.log(isIsogram('Dermatoglyphics'));
// console.log(isIsogram('aba'));
// console.log(isIsogram('moOse'))

// Approach 3:

function isIsogram(str) {
    if (str.isEmpty) {
        return true;
    } else {
        str = str.toLowerCase();
    }
    var array = str.split('');
    var sortedArr = array.slice().sort();
  
    for (var i = 0; i < array.length; i++) {
        if (sortedArr[i + 1] == sortedArr[i]) {
            return false;
        }
    }
    return true;
}

console.log(isIsogram('moOse'));                 // should return false
console.log(isIsogram('to be or not to be'));    // should return false
console.log(isIsogram('wasdfgerty'));            // should return true
console.log(isIsogram(''));                      // should return true