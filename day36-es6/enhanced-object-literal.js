// es5

var person = {
    firstName: 'ani',
    city: 'bangalore',
    details: function() {
        return `${this.firstName} live in ${this.city}`;
    },
    greet: function(msg) {
        return `${this.firstName} says ${msg}`;
    }
}

console.log(person);
console.log(person.details())
console.log(person.greet('How are you?!'));

// es6

let student = {
    firstName: 'ravi',
    city: 'rajpur',
    details() {
        return `${this.firstName} live in ${this.city}`;
    },
    greet(msg) {
        return `${this.firstName} says ${msg}`;
    }
}

console.log(student);
console.log(student.details())
console.log(student.greet('How are you?!'));