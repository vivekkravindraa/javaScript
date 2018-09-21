var axios = require('axios');
var cityName = 'Dehradun';
var countryCode = 'IN';
var key = `c5367a1e9557ba7a5b81fabe81f51da3`;
var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${key}`;

// https://api.openweathermap.org/data/2.5/weather?q=Dehradun,IN&appid=c5367a1e9557ba7a5b81fabe81f51da3

axios.get(url)
.then(function(response) {
    var cityTemp = response.data;
    var kelvinTemp = cityTemp.main.temp;
    var kelvinStd = 273.15;
    var celciusTemp = kelvinTemp - kelvinStd;
    console.log(`The temperature in ${cityName},${countryCode} is ${Math.round(Math.floor((celciusTemp)))}`);
})
.catch(function(error) {
    console.log(error);
});