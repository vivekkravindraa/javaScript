// var str = 'i.like.this.program.very.much'
// reverseWord(Str)
// return - > much.very.program.this.like.i

function reverseWord(str) {
    var splitStr = str.split('.');
    splitStr.reverse(); // try reversing an array without using the reverse method
    return splitStr.join('.');
}

var str = 'i.like.this.program.very.much';
console.log(reverseWord(str));