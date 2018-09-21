var axios = require('axios');
var name = 'vivek';
var key = 'wubmUMBbjXXCSpQrnP';

var url = `https://www.gender.api.com/get?name=${name}&key=${key}`;
axios.get(url)
// OR

// var uri = `https://www.gender.api.com/get`;
// axios.get(uri, {
//     params: {
//         name: name,
//         key: key
//     }
// })
// // OR
// axios.get(uri, {
//     params: {
//         name,
//         key
//     }
// })
// ES6 Feature ---> Concise properties (when property name and the variable name used to assign to the property is the same then we can inside the obj just mention the property name)

.then(function(response) {
    var oName = response.data;
    console.log(`The gender of ${name} is ${oName.gender}`);
})

.catch(function(error) {
    console.log(error);
});