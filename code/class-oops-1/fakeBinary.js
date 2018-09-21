function fakeBinary(str) {
    var myString = '';
    for(var i = 0; i < str.length; i++) {
        if(str[i] < '5') {
            myString = myString + '0';
        } else {
            myString = myString + '1';
        }
    }
    return myString;
}

console.log(fakeBinary('3457'));
console.log(fakeBinary('1234'));