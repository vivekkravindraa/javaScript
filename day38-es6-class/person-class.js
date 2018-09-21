// es5 - object prototype function
// properties - firstName, lastName // methods - details, greet

function Person(firstName,lastName) {
    // while creating an object, you are assigning default values
    this.firstName = firstName;
    this.lastName = lastName;
    this.details = function() {
        return this.firstName + ' ' + this.lastName;  
    };
    this.greet = function() {
        return 'Hello, My name is ' + this.firstName;
    };
}

var p1 = new Person('Ravi','Subbu');
console.log(p1.firstName);
console.log(p1.lastName);
console.log(p1.details());
console.log(p1.greet());

var p2 = new Person('Madhu','Priya');
console.log(p2.details());
console.log(p2.greet());

// es6
// properties & methods
// properties - name & average
// method - details

class Player {
    constructor(name,average = 0) {
        this.name = name;
        this.average = average;
    }

    details() {
        return `NAME: ${this.name} & AVG: ${this.average}`;
    }
}

var player1 = new Player('Sachin',48.08);
console.log(player1.details());

player1.lastName = 'Tendulkar';
console.log(player1.lastName);

var player2 = new Player('Virat',53.4);
console.log(player2.details());
