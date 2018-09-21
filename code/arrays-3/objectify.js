// Write a function that accepts a nested array and returns a well-structured object. The array passed into the function will look like the one below and have only four levels of nested-ness.
// As you can see in the examples below, the structure of the input is an array. Each element of that array is an array. The first element of the nested array (eg. animals) should become a property key on the return object. The second element of the nested array is also an array, where the elements alternate between property names (eg. dogs) and corresponding property values (eg. ['Corgi, 'Sheltie']).

var data = [
  [ 'animals',
    [
      'dogs', ['Corgi', 'Sheltie'],
      'cats', ['Tabby','Black'],
      'pigs', ['Teacup']
    ]
  ],
  [ 'guitars',
    [
      'Fender', ['Telecaster', 'Stratocaster','Jazzmaster'],
      'Gibson', ["Gibson Flying-V", 'Firebird', 'Les Paul']
    ]
  ]
];

function objectifier(a) {
  var myObject = {};
  for(var i = 0; i < a.length; i++) {
      var result = a[i][0];
      myObject[result] = {};
      var values = a[i][1];
      for(var j = 0; j < values.length; j++) {
          if(j % 2 === 0) {
              myObject[result][values[j]] = values[j+1];
          }
      }
  }
  // console.log(myObject);
  return myObject;
}
console.log(objectifier(data));