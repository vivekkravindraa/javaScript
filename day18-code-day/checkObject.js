function checkObject(obj,pro) {
    // var result = Object.keys(obj);
    // for(var i = 0; i < result.length; i++) {
    //     if(result[i] === pro) {
    //         return true;
    //     }
    // }
    // return false;
    
    var result = Object.keys(obj);
    var myResult = result.find(function(value) {
        return value === pro;
    });
    if(myResult) {
        return true;
    } else {
        return false;
    }
}

console.log(checkObject({'name':'Rama','city':'Ayodhya'},'city'));    // true 
console.log(checkObject({'name':'Rama','city':'Ayodhya'},'age')); // false