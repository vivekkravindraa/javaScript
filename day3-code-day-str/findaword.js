function search_word(str1, str2) {
	var count = 0;
	var splitStr = str1.split(' ');
	splitStr.forEach(function(str) {
        if(str === str2) {
            count = count + 1;
        }
    });
    return `String ${str2} was found ${count} time(s)`;
}
console.log(search_word('The quick brown fox','fox'));
console.log(search_word('aa bb cc dd aa','aa'));