var axios = require('axios');

// var url = 'http://dct-api-data.herokuapp.com/products/302.json';

var url = 'http://dct-api-data.herokuapp.com/users/17.json';

axios.get(url)

.then(function(response) {
    var user = response.data;

    // console.log(`Listing reviews - ${products.reviews.length}`)
    // products.reviews.forEach(function(review) {
    //     console.log(`Body - ${review.body} \nUser - ${review.user} \nRating - ${review.rating}\n\n`);
    // });

    var total = 0
    user.orders.forEach(function(order) {
        if(user.username === 'sherwood') {
            total = total + order.order_total;
        }
    })
    console.log(total);
    if(total > 15000) {
        console.log(`${user.username} is a Prime Customer`);
    } else {
        console.log(`Not a Prime Customer.`);
    }
})

.catch(function(error) {
    console.log(error);
});