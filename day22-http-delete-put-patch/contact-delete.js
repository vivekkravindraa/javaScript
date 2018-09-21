var axios = require('axios');
var id = 125;
var url = `http://dct-api-data.herokuapp.com/contact_forms/${id}.json`;

axios.delete(url)
.then(function(response) {
    console.log(response.data);
    console.log(`Data with ${id} has been deleted.`);
})
.catch(function(err) {    
    console.log('code',err.response.data.status);
    console.log('error',err.response.data.error);
});

// Call to Perform delete
// Call again to get the error message