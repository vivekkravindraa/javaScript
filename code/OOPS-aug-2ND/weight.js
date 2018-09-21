// Weight of strings
// You are given two strings S1 and S2. You need to find weights of both strings and compare them. The weight of a string can be obtained by adding individual weights of the characters that make the string. The weight of individual characters are the position on which they occur in the English alphabets table; for eg, a has weight 1, z has weight 26.

// Output:

// Print 1 if the weight of the first string is greater. Print 2 if the weight of the second string is greater. Print equal if the weights are equal.

// Example:

// superman, batman ---> 1
// batman, manbat ---> 'equal'
// batman, superman ---> 2

class Weight {
	constructor(a,b) {
		this.a = a;
		this.b = b;
	}
	weightCheck() {
		let alpha = {'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8,'i':9,'j':10,'k':11,'l':12,'m':13,'n':14,'o':15,'p':16,'q':17,'r':18,'s':19,'t':20,'u':21,'v':22,'w':23,'x':24,'y':25,z:'26'};
		
		let first = this.a.split('');
		let firstW = 0;
		first.forEach(function(aValue) {
			firstW = firstW + alpha[aValue]; 
		})
		
		let second = this.b.split('');
		let secondW = 0;
		second.forEach(function(bValue) {
			secondW = secondW + alpha[bValue]; 
		})
		
		if(firstW > secondW) {
			return 1;
		} else if(firstW < secondW){
			return 2;
		} else {
			return 'equal';
		}
	}
}

function strWeight(a,b) {
	let w = new Weight(a,b);
	return w.weightCheck();
}

console.log(strWeight(batman,manbat));
console.log(strWeight(superman,batman));
console.log(strWeight(batman,superman));