var students = ['ravi','rakesh','pavan','pavan'];

// findTimes(students, 'pavan')
// return -> pavan appears 2 time(s)

// findTimes(students, 'gokul')
// return -> gokul is not in the list

function findTimes(students, name) {
    var result = students.filter(function(student) {
        return student === name;
    });
    if(result.length === 0) {
        return `${name} is not in the list.`;
    } else {
        return `${name} appears ${result.length} time(s).`;
    }
}

console.log(findTimes(students,'pavan'));
console.log(findTimes(students,'gokul'));