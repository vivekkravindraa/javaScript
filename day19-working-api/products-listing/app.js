var axios = require('axios');

var url = 'http://dct-api-data.herokuapp.com/products.json';

axios.get(url)

// console.log(`Execution begins with this line`);

// .then(function(response) {
//     // console.log(response.data);
//     var products = response.data;
//     console.log('Listing Products', products.length);
//     products.forEach(function(product) {
//         console.log(`${product.name} - ${product.price} - ${product.category}`);
//     });
// })

// list all products belonging to grocery category
// count of products whose cod eligible is false
// list products which are out of stock, stock = 0
// products whose price is above 2500 and below 3500
// count of products belonging to books/games category

.then(function(response) {
    var products = response.data;
    var count = 0;

    console.log(`GROCERY LIST`);
    var groceryList = products.filter(function(product) {
        return product.category === 'Grocery';
    });
    console.log(groceryList);
    
    console.log(`ELIGIBLE LIST`);
    products.forEach(function(product) {
        if(product.cod === false) {
            count++;
        }
    });
    console.log(count);
    
    console.log(`OUT OF STOCK`);
    var outOfStock = products.filter(function(product) {
        return product.stock === 0;
    });
    console.log(outOfStock);
    
    console.log(`WITHIN RANGE`);
    var priceRange = products.filter(function(product) {
        return product.price > 2500 && product. price <= 3500;
    });
    console.log(priceRange);

    console.log(`CATEGORY COUNT`);
    products.forEach(function(product) {
        if(product.category === 'Books' && product.category === 'Games') {
            count++;
        }
    });
    console.log(count);
})

.catch(function(err) {
    console.log(err);
});

// console.log(`Execution continues with this line`); // '.then' will be executing in the background

// execution is asynchronous in nature