var axios = require('axios');

function Product(data) {
    this.name = data.name;
    this.price = data.price;
    this.category = data.category;
    this.cod = data.cod;
    this.stock = data.stock;

    this.submit = function() {
        var dataToSend = {
            name: this.name,
            price: this.price,
            category: this.category,
            cod: this.cod,
            stock: this.stock
        };
        axios.post('http://dct-api-data.herokuapp.com/products.json',dataToSend)
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
            // var errors = error.response.data;
            // for(var key in errors) {
            //     console.log(key, errors[key]);
            // }
        });
    }
}

var p1 = new Product({name: 'Marker', price: '25', category: 'Stationary', cod: true, stock: '5'});
p1.submit();