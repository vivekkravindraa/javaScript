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

console.log(strWeight(batman,superman));
console.log(strWeight(manbat,batman));

// Input & Output

// return 1
// batman
// superman

// return 2
// manbat
// batman

// return 'equal'
// batman
// batman