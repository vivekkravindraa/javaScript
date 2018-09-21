//type js code here
function is_string(value) {
	if(typeof value == 'string') {
		return true;
	} else {
		return false;
	}
}

console.log(is_string([1,2,4,0]));