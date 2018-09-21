let person = {
    firstName: 'ani',
    lastName: 'sg',
    city: 'bangalore',
    skills: ['js','rb','py','php']
}

// es5

console.log(typeof person);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.city);

let fN = person.firstName;
let lN = person.lastName;
let c = person.city;

console.log(fN,lN,c);

// es6

let { firstName, lastName, city, skills } = person;
console.log(firstName, lastName, city, skills);

// properties - city and skills are ignored

// let { firstName, lastName } = person;
// console.log(firstName, lastName); 