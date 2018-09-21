// es5
// using 'that' keyword while iterating
var person = {
    firstName: 'rakesh',
    skills: ['js','rb','py'],
    details: function() {
        // console.log(this);
        // console.log(this.name);
        // console.log(this.skills);
        var that = this;                                    // 'that' refers to the 'person' object
        this.skills.forEach(function(skill) {
            console.log(`${that.firstName} knows ${skill}`);
        })
    }
}
console.log(person.details());

// using .bind(this) method while iterating
var person = {
    firstName: 'rakesh',
    skills: ['js','rb','py'],
    details: function() {
        this.skills.forEach(function(skill) {
            console.log(`${this.firstName} knows ${skill}`);
        }.bind(this));                                      // .bind(this) refers to the person object
    }
}
console.log(person.details());

// es6 - under anonymous function the 'this' keyword is not bound to the function (acceptable)
var person = {
    firstName: 'rakesh',
    skills: ['js','rb','py'],
    details: function() {
        this.skills.forEach((skill) => {
            console.log(`${this.firstName} knows ${skill}`);
        })
    }
}
console.log(person.details());

// using a for loop will allow 'this' keyword
var person = {
    firstName: 'rakesh',
    skills: ['js','rb','py'],
    details: function() {
        for(var i = 0; i < this.skills.length; i++) {
            console.log(`${this.firstName} knows ${this.skills[i]}`);
            // 'looping' allows 'this' to be used
        }
    }
}
console.log(person.details());