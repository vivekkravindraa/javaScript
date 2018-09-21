// If you can't sleep, just count sheeps!!
// If you can't sleep, just count sheeps!!

// Task:
// Given a number, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."

// 1. countSheep(3) returns "1 sheep...2 sheep...3 sheep..."

// 2. countSheep(5) returns "1 sheep...2 sheep...3 sheep...4 sheep...5 sheep..."

// Note:
// You will always receive a positive integer.

function countSheep(a) {
    var count = 0;
    var str = '';
    for(var i = 0; i < a; i++) {
        count++;
        str = str + `${count} sheep...`;
    }
    return str;
}

console.log(countSheep(3));
console.log(countSheep(5));