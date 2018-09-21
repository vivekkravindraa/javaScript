function fakeBinary(a){
	var ary = [];
    var splitStr = a.split('');
	for(var i = 0; i < splitStr.length; i++) {
		if(splitStr[i] < 5) {
            ary.push(0);
		} else if(splitStr[i] >= 5) {
            ary.push(1);
        }
    }
    return ary.join('');
}

console.log(fakeBinary('3457'));
console.log(fakeBinary('1234'));