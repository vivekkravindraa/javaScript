var axios = require('axios');
var id = 19;

var url = `http://dct-api-data.herokuapp.com/users/${id}.json`;

axios.delete(url)
.then(function(response) {
    console.log(response.data);
    console.log(`User with the id ${id} has been deleted`);
})
.catch(function(err) {
    console.log('code', err.response.data.status);
    console.log('error', err.response.data.error);
});