var fahrenheitHandle = document.getElementById('fahrenheit');
var celciusHandle = document.getElementById('celcius');

fahrenheitHandle.addEventListener('keyup',function(){
    celciusHandle.value = Math.round((fahrenheitHandle.value - 32) * 5 / 9);
},false);