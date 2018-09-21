// Filter Values
// Write a JavaScript function to filter false, null, 0 and blank values from an array. 

// Test Data :
// filterValues([58, '', 'abcd', true, null, false, 0]);
// [58, "abcd", true]

function filterValues(a) {
    let newArray = [];
    for(let i = 0; i < a.length; i++) {
        if(a[i]) {
            newArray.push(a[i]);
        }
    }
    return newArray;
}

console.log(filterValues([58, '', 'abcd', true, null, false, 0]));