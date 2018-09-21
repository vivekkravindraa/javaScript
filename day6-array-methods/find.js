var names = ['ramesh','suresh','veeresh','ganesh'];

var present = names.find(function(name) {
    return name === 'veeresh';
});
console.log(present);

// findName(names,'suresh')
// return 'suresh'

// findName(names,'jaggesh')
// return undefined

function findName(names, search) {
    var result = names.find(function(name) {
        return name === search;
    });
    return result;
}

console.log(findName(names, 'suresh'));
console.log(findName(names, 'jaggesh'));