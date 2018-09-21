var person = {
    name: 'Vivek',
    city: 'Bangalore'
}

function sayName(person) {
    return `My name is ${person.name}`
}

console.log(sayName(person));

var student = {
    name: 'Rakesh',
    city: 'Tumkur',
    education: 'BE',
    college: 'SIT',

    sayName: function() {
        return `My name is ${this.name}`;
    },
    whichCity: function() {
        return `My city is ${this.city}`;
    },
    myEducation: function() {
        return `My education is ${this.education}`;
    },
    myCollege: function() {
        return `My college is ${this.college}`;
    }
}

console.log(student.name);
console.log(student.sayName());
console.log(student.whichCity());
console.log(student.myEducation());
console.log(student.myCollege());