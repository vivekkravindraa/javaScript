function evenOdd(numbers) {     
      var result = [[],[]]
      numbers.forEach(function(num) {
            if(num % 2 === 0) { 
                  result[0].push(num);       
            } else {
                  result[1].push(num);     
            }
      });
      return result; 
}

// function evenOdd(numbers) {
//       var evenNumbers = [];
//       var oddNumbers = [];
      
//       numbers.forEach(function(num) {
//             if(num % 2 === 0) {
//                   evenNumbers.push(num);
//             } else {
//                   oddNumbers.push(num);
//             }
//       });
//       return [evenNumbers, oddNumbers];
// }

var numbers = [1,2,3,4,5,6];
console.log(evenOdd(numbers));