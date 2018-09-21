var names = ['ganesh','suresh','veeresh'];

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);

// initialization; condition; incrementation
for(var i = 0; i < names.length; i++) {
    //console.log(`at ${i} index we found ${names[i]}`);
    console.log(names[i].toUpperCase());
}

console.log('I\'m out of the loop');

var numbers = [10,20,30];
var sum = 0; // Should be declared outside the loop
for(var i = 0; i < numbers.length; i++) {
    console.log(`index - ${i} | sum - ${sum} | n - ${numbers[i]}`);
    sum = sum + numbers[i];
    console.log(`index - ${i} | sum - ${sum} | n - ${numbers[i]}`);
}

console.log(sum);

// find the total of the prices in even indexes

var prices = [10,20,30,40,50,60];
var sum = 0;

for(var i = 0; i < prices.length; i++) {
    if(i % 2 === 0) {
        console.log(`index - ${i} | sum - ${sum} | n - ${prices[i]}`);
        sum = sum + prices[i];
        console.log(`index - ${i} | sum - ${sum} | n - ${prices[i]}`);
    }
}
console.log(sum);

// return sum of even numbers and count of odds

function sumCount(nums) {
    var sum = 0;
    var count = 0;
    var numbers = [];
    for(var i = 0; i < nums.length; i++) {
        if((nums[i] % 2) === 0) {
            sum = sum + nums[i];
        } else {
            count++;
        }
    }
    numbers.push(sum, count);
    return numbers;
}
var nums = [10,15,20,25,30,40];
console.log(sumCount(nums));