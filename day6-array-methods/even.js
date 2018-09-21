// Imperative Programming

// var numbers = [10,15,20,25,30,35]
// findEvensCount(numbers)
// should return count of even numbers ie. 3

function findEvensCount(numbers) {
    var count = 0;
    for(var i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            count = count + 1; // count++
        }   
    }
    return count;
}

// findEvens(numbers)
// should return all even numbers ie. [10,20,30]

function findEvens(numbers) {
    var evens = [];
    for(var i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            evens.push(numbers[i]);
        }
    }
    return evens;
}

var numbers = [10,15,20,25,30,35];
console.log(findEvensCount(numbers));
console.log(findEvens(numbers));

// isElePresent(numbers,10)
// should return true if the element is present

function isElePresent(numbers, element) {
    var isFound = false;
    for(var i = 0; i < numbers.length; i++) {
        if(numbers[i] === element) {
            isFound = true;
        }
    }
    return isFound;
}

console.log(isElePresent(numbers, 10));
console.log(isElePresent(numbers, 25));
console.log(isElePresent(numbers, 40));