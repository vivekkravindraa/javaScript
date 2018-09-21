// Write a JavaScript function to convert an object into a list of `[key, value]` pairs
// Sample:   keyValue({'name':'Rama','city':'Ayodya'})
// Output:   [['name','Rama'],['city','Ayodya']]

function keyValue(a) {
    var myArray = [];
    for(var key in a) {
        myArray.push([key, a[key]]);
    }
    return myArray;
}

console.log(keyValue({'name':'Rama','city':'Ayodya'}));