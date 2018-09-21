function doubleCola(names, r) {
    var n = 2;
    for(var i = 0; i < r; i++) {
        var person = names.shift();
        // names.push(person, person); what if we have to do 10's of times ?
        for(var count = 1; count <= n; count++) {
            names.push(person);           
        }
        console.log(names);
        return person;
    }
}

var names = ['sheldon','leonard','penny','rajesh','howard'];
var r = 6;
console.log(doubleCola(names,r));