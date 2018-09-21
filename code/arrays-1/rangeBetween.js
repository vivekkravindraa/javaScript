function rangeBetween(a, b) {
    var result = [];
    for(var i = a; i <= b; i++) {
        result.push(i);
    }
    return result;
}

console.log(rangeBetween(4,7));
console.log(rangeBetween(-4,7));