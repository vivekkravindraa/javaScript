function findMean(a){
	var sum = 0;
	for(var i = 0; i < a.length; i++){
		sum = sum + a[i];
	}
	var total = sum / i;
	return Math.floor(total);
}

console.log(findMean([15,15,20,15]));
console.log(findMean([15,15,17]));