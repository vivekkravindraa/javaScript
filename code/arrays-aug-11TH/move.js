// 1. move([10, 20, 30, 40, 50], 0, 2);
// return [20, 30, 10, 40, 50]

// 2. move([10, 20, 30, 40, 50], 1, 2);
// return [10, 30, 20, 40, 50]

function move(a,b,c){
    if(a.length === 0) {
        return 'empty array';
    } else if(b > a.length){
        return 'element not present at the given index';
    }
    let ele = a.splice(b,1);
    a.splice(c,0,ele[0]);
    return a;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], 1, 2));