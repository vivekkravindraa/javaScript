function findEO(num) {
    if(num % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

console.log(findEO(10));
console.log(findEO(11));