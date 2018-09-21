// Weight of strings
// You are given two strings S1 and S2. You need to find weights of both strings and compare them. The weight of a string can be obtained by adding individual weights of the characters that make the string. The weight of individual characters are the position on which they occur in the English alphabets table; for eg, a has weight 1, z has weight 26.

// Output:
// Print 1 if the weight of the first string is greater. Print 2 if the weight of the second string is greater. Print equal if the weights are equal.

// Example:
// superman // batman 
// batman // superman
// manbat // batman

function findWeight(a,b) {
    let alpha = { 'a':1, 'b':2, 'c':3, 'd':4,'c':5, 'e':6, 'f':7,'g':8,'h':9,
    'i':10,'j':11,'k':12,'l':13,'m':14,'n':15,'o':16,'p':17,'q':18,'r':19,'s':20,'t':21,'u':22,'w':23,'x':24,
    'y':25,'z':26 }

    let aLetter = a.split('');
    aWeight = 0
    aLetter.forEach(function(aValue) {
        aWeight += alpha[aValue];
    })

    let bLetter = b.split('');
    bWeight = 0;
    bLetter.forEach(function(bValue) {
        bWeight += alpha[bValue];
    })

    if(aWeight > bWeight) {
        return 1;
    } else if(aWeight < bWeight) {
        return 2;
    } else {
        return 'equal';
    }
}

console.log(findWeight('superman', 'batman'));
console.log(findWeight('batman', 'superman'));
console.log(findWeight('batman', 'batman'));