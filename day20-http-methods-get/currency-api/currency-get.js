var axios = require('axios');
var currencies = 'INR,EUR,SGD';
var key = `b078e664eaaafec4f12b81327b6c9d5e`;
var url = `http://www.apilayer.net/api/live?access_key=${key}&source=USD&currencies=${currencies}&format=1`;

// reference: https://currencylayer.com/quickstart

// http://apilayer.net/api/live
// ?access_key=YOUR_ACCESS_KEY
// &source=GBP
// &currencies=USD,AUD,CAD,PLN,MXN
// &format=1

axios.get(url)

.then(function(response) {
    var currency = response.data;
    console.log(currency);
})

.catch(function(error) {
    console.log(error);
});