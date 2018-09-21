var n1 = 10;
var n2 = 20;

function add(n1, n2) {
    n1 = 1000;
    n2 = 2000;
    var n3 = n1 + n2;
    return n3;
}

console.log(add(n1,n2)); // 3000
console.log(n1); // 10
console.log(n2); // 20
// console.log(n3); ---> should throw a reference error