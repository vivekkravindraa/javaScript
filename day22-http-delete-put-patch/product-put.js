var axios = require('axios');

var id = 325;
var url = `http://dct-api-data.herokuapp.com/products/${id}.json`;

axios.put(url, {
    price: 23400,
    stock: 1000
})
.then(function(response) {
    console.log(response.data);
    console.log(`Product with id ${id} has been updated`);
})
.catch(function(err) {
    console.log(err);
});