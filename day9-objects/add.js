// var obj1 = {
//     n1: 10
// }
// var obj2 = {
//     n1: 20
// }

// function addObj(obj1, obj2) {
// var add = obj1.n1 + obj2.n1;
// return add;

// return obj1.n1 + obj2.n1;
// }

// console.log(addObj(obj1, obj2));

// var obj1 = {evens : [10,20,30]}, obj2 = {odds: [15,25,35]}

var obj1 = {
    evens: [10,20,30]
}
var obj2 = {
    odds: [15,25,35]
}

function addEvenOdds(obj1,obj2) {
    var evenSum = 0;
    var oddSum = 0;
    
    // var result = [];
    // console.log(obj1.evens);
    // console.log(obj2.evens);
    
    obj1.evens.forEach(function(value) {
        evenSum = evenSum + value;
    });

    obj2.odds.forEach(function(value) {
        oddSum = oddSum + value;
    });

    // result.push(evenSum, oddSum);
    // return result;

    return [evenSum, oddSum];
}
console.log(addEvenOdds(obj1,obj2));