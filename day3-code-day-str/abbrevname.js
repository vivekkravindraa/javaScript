function abbrev_name(str) {
    var splitStr = str.split(' ');
    var result = `${splitStr[0]} ${splitStr[1].charAt(0)}.`;
    return result;
}

console.log(abbrev_name("Robin Singh")); // Robin S.