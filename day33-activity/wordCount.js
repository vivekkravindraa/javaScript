var userInputHandle = document.getElementById('userInput');
var wordsHandle = document.getElementById('words');
var charsHandle = document.getElementById('chars');

userInputHandle.addEventListener('keyup',function() {
    
    var sentence = userInputHandle.value;
    var countChars = sentence.length;
    var countWords = sentence.split(' ').length;

    if(userInputHandle.value === '') {
        wordsHandle.innerHTML = 0;
    } else {
        wordsHandle.innerHTML = countWords;
    }

    charsHandle.innerHTML = countChars;
    
},false);