// function hashTagGen(sentence) {
//     var splitSent = sentence.split(' ');
//     var tag = '#';
//     for(var i = 0; i < splitSent.length; i++) {
//         var word = splitSent[i].charAt(0).toUpperCase() + splitSent[i].slice(1);
//         tag += word;
//     }
//     return tag;
// }

// var sentence = 'Hello there thanks for trying my Kata';
// console.log(hashTagGen(sentence));

function hashTagGenerator(str) {
    if(str.length === 0) {
        return false;
    }
    var tag = '#';
    var words = str.split(' ');
    words.forEach(function(word) {
        tag = tag + word[0].toUpperCase() + word.slice(1);
    });
    if(tag.length > 140) {
        return false;
    }
    return tag;
}

var str = 'make in india';
console.log(hashTagGenerator(str));
var str = '';
console.log(hashTagGenerator(str));