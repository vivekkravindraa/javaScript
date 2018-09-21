function vowelCount(str) {
    var count = 0;
    if(str.length < 1) {
		return 'empty string';
	}
	for(var i = 0; i < str.length; i++) {
		if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
			count = count + 1;
		} else if(str[i] !== 'a' || str[i] !== 'e' || str[i] !== 'i' || str[i] !== 'o' || str[i] !== 'u') {
			count = count + 0;
		}
	}
	return count;
}

console.log(vowelCount('Good Job'));
console.log(vowelCount('Yankees'));
console.log(vowelCount('symphysy'));
console.log(vowelCount(''));