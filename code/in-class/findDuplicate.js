// Write a program to find duplicate values in a JavaScript array.
// findDuplicate([10,20,30,40,10,40]);

// output - [10,40];

function findDuplicate(a) {
    var newArray = [];
    for(var i = 0; i < a.length; i++) {
        if(a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
            result = a.splice(i,1);
            newArray.push(result[0]);
        }
    }
    return newArray;
}

console.log(findDuplicate([10,20,30,40,10,40]));