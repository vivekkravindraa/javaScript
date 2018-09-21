// The prototype property allows you to add properties and methods to any object,
// (Number, Boolean, String, Array, Object and User Defined Objects)

String.prototype.toCapitalize = function() {
    return this[0].toUpperCase() + this.slice(1);
}
var name = 'vivek';
console.log(name.toCapitalize());   // 'Vivek'

Array.prototype.unique = function() {
    var result = [];
    this.forEach(function(ele) {
        if(result.indexOf(ele) < 0) {
            result.push(ele);
        }
    });
    return result;
}
var numbers = [10,20,30];
var names = ['ramesh','veeresh','ramesh','mahesh'];
var cities = ['bangalore','mysore','mangalore','bangalore'];

console.log(numbers.unique());      // [10,20,30]  
console.log(names.unique());        // ['ramesh','veeresh','mahesh']
console.log(cities.unique());       // ['bangalore','mysore','mangalore']

// console.log(numbers.first());
// console.log(numbers.last());
// console.log(numbers.sample());

Array.prototype.first = function() {
    return this[0];
}
console.log(numbers.first());   // 10

Array.prototype.last = function() {
    return this[this.length - 1];
}
console.log(numbers.last());    // 30

Array.prototype.sample = function() {
    return this[Math.floor(Math.random() * this.length)];
}
console.log(numbers.sample());  // returns a random digit from the array

String.prototype.camelCase = function() {
    var arr = this.split(' ');
    var str = arr[0].charAt(0).toLowerCase() + arr[0].slice(1);
    for(var i = 1; i < arr.length; i++) {
        str = str + arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return str;
}
var fullName = 'rahul dravid';
console.log(fullName.camelCase());  // 'rahulDravid'
var player = 'Sachin ramesh tendulkar';
console.log(player.camelCase());    // 'sachinRameshTendulkar'

Array.prototype.deleteAt = function(index) {
    this.splice(index, 1);
    return numbers;
}
console.log(numbers.deleteAt(2));   // [10,20]

Array.prototype.insertAt = function(index, element) {
    this.splice(index, 0, element);
    return numbers;
}
console.log(numbers.insertAt(1, 100));  // [10,100,20]

Array.prototype.delete = function(value) {
    for (var i = 0; i < this.length; i++) {
        if(names[i] === value) {
            this.splice(i, 1);
        }
    }
    return this;
}
console.log(names.delete('ramesh'));    // [veeresh, mahesh]