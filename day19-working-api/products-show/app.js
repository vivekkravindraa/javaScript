/*
    1. create a package.json file (npm init)
    2. install axios (npm install --save axios)
    3. using axios - goto
    'http://dct-api-data.herokuapp.com/products/301.json';
    4. display the data you get back
    '#name - #price - #category'
*/

var axios = require('axios');

var url = 'http://dct-api-data.herokuapp.com/products/301.json';

axios.get(url)

.then(function(response) {
    var product = response.data;
    var tag = '#';
    console.log(`${tag}${product.name} - ${tag}${product.price} - ${tag}${product.category}`);
})

.catch(function(err) {
    console.log(err);
    // console.log(err.code);
});