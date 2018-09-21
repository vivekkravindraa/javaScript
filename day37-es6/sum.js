const d = require('./data-products');

d.data.forEach(function(value){
    console.log(value.name);
})

let { data } = require('./data-products');

data.forEach(function(value){
    console.log(value.name);
})