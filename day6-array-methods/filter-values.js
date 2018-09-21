// var values = ['dct',560011,'academy','bangalore',430]

// filterStrValues(values)
// return ['dct','academy','bangalore']

var values = ['dct',560011,'academy','bangalore',430];

function filterStrValues(values) {
    var result = values.filter(function(value) {
        return typeof value === 'string';
    });
    return result;
}

console.log(filterStrValues(values));

// filterNumValues(values)
// return [560011, 430]

function filterNumValues(values) {
    var result = values.filter(function(value) {
        return typeof value === 'number';
    });
    return result;
}

console.log(filterNumValues(values));

// filterValues(values, 'string')
// return ['dct','academy','bangalore']

function filterValues(values, type) {
    var result = values.filter(function(value) {
        return typeof value === type;
    });
    return result;
}

console.log(filterValues(values, 'string'));

// filterValues(values, 'number')
// return [560011, 430]

function filterValues(values, type) {
    var result = values.filter(function(value) {
        return typeof value === type;
    });
    return result;
}

console.log(filterValues(values, 'number'));