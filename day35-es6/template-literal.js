var source = 'bangalore';
var destination = 'mysore';
var distance = '150';
var timeTaken = '3 hours 30 mins';

var computeTime = function(speed) {
    return distance / speed;
}

// es5

console.log('The distance from ' + source +' to '+ destination + ' is ' + distance + ' kms and the time taken is ' + timeTaken);

// es6

console.log(`The distance from ${source} to ${destination} is ${distance} kms and the time taken is ${timeTaken}`);

console.log(`The time taken at a speed of 50 is ${computeTime(50)} hrs`);