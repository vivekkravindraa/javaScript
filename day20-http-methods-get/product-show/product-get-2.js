var axios = require('axios');
var url = `https://dct-api-data.herokuapp.com/products.json?category=Books`;

axios.get(url)
.then(function(response) {
    var products = response.data;
    products.forEach(function(product) {
        console.log(`#${product.name} - #${product.category} - #${product.price} - Length: ${product.reviews.length}`)
    });
})

.catch(function(error) {
    console.log(error);
});