// string_chop = function(str, size){
//     if (str == null) {
//         return [];
//     }
//     // str = String(str);
//     // size = ~~size;
//     return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
// }
// console.log(string_chop('resource'));
// console.log(string_chop('resource',2));
// console.log(string_chop('dcresource',3));

function string_chop(myString, size){
    var myArray = [];
    if(size === undefined) {
        return myString;
    }
    for(var i = 0; i < myString.length; i += size){
        myArray.push(myString.substr(i, size));
    }
    return myArray;
}

console.log(string_chop('resource'));
console.log(string_chop('resource',2));
console.log(string_chop('dcresource',3));