// Using forEach

var name = 'Rakesh';
var skills = ['js','rb','py'];

var result = [];
skills.forEach(function(skill) {
    result.push(`${name} knows ${skill}`);
});

console.log(result);            // returns an array

// Using Map

var result = skills.map(function(skill) {
    return `${name} knows ${skill}`;
});

console.log(result);            // returns an array // ES6 Feature