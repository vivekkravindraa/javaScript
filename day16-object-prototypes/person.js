function Person(name, age) {
    this.name = name;
    this.age = age;
    this.description = function() {
        return `${this.name} is ${this.age}`;
    }
}

var person = new Person('Rakesh', 25);
console.log(person.description());

// new properties & method being assigned to object person
person.education = 'BE Civil';      // property gets added
console.log(person.education);
person.skills = ['js', 'py', 'rb']; // property gets added
person.fullDetails = function() {
    return `${this.name} knows ${this.skills}`;
}
console.log(person.fullDetails());  // method gets added

var singer = new Person('Linkin Park', 42);
console.log(singer.name);
console.log(singer.description());
// console.log(singer.education);      ---> undefined
// console.log(singer.skills);         ---> undefined
// console.log(singer.description());  ---> error - function not defined

var student = new Person('Ravi', 35);
console.log(student.name);
console.log(student.description());
// console.log(student.education);     ---> undefined
// console.log(student.skills);        ---> undefined
// console.log(student.fullDetails()); ---> error - function not defined