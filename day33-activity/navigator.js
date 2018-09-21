var submitHandle = document.getElementById('submit');
var latHandle = document.getElementById('lat');
var longHandle = document.getElementById('long');
var tempHandle = document.getElementById('temp');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}
function showPosition(position) {
    latHandle.innerHTML = `${position.coords.latitude}`;
    longHandle.innerHTML = `${position.coords.longitude}`;
}
function getTemperature() {
    var latValue = latHandle.innerHTML;
    var longValue = longHandle.innerHTML;

    axios.get(`https://api.darksky.net/forecast/be04d1274fc4fd4e9281685b20dc1334/${latValue},${longValue}`)
    
    .then(function(response) {
        //console.log(response);
        tempHandle.innerHTML = `${response.data.currently.temperature}`;
    })
    .catch(function(error) {
        console.log(error);
    })
}
submitHandle.addEventListener('click',function() {
    getLocation();
    getTemperature();
},false);