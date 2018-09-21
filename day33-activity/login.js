var passwordHandle = document.getElementById('password');
var checkboxHandle = document.getElementById('checkbox');

function changeType() {
    if(checkboxHandle.checked) {
        document.getElementById('password').setAttribute('type','text');
    } else if(!(checkboxHandle.checked)) {
        document.getElementById('password').setAttribute('type','password')
    }
}

checkboxHandle.addEventListener('change',function() {
    changeType();
},false);