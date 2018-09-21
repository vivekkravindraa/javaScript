class Task {
    constructor(name) {
        // instance properties
        this.name = name;
        this.isCompleted  = false; 
        // Task.data.push(this);            // pushing all objects into an array, which becomes accessible
    }

    // instance method
    details() {
        return `${this.name} - ${this.isCompleted}`
    }

    // class method
    static all() {
        return Task.data;
    }

    // class method
    static info() {
        return `Im a class method`;
    }
}

// static / class property                  // should be defined outside the class
Task.data = [];

let t1 = new Task('go for walk');

// properties and methods are instances of the object 
console.log(t1.name);
console.log(t1.isCompleted);
console.log(t1.details());

// properties and methods can not be called on the class! 
// console.log(Task.name);             // undefined
// console.log(Task.isCompleted);      // undefined
// console.log(Task.details());        // ERROR

// static methods and properties should be called on the class
console.log(Task.all());
console.log(Task.info());
console.log(Task.data)

// static methods and properties can not be called on the objects / instances!
// console.log(t1.all());              // ERROR
// console.log(t1.info());             // ERROR
// console.log(t1.data);               // undefined

let t2 = new Task('get groceries');

console.log(t1.name);
console.log(t1.isCompleted);
console.log(t1.details());