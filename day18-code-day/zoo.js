// var myZoo = [
//     ["King Kong", ["gorilla", 42]],
//     ["Nemo", ["fish", 5]],
//     ["Punxsutawney Phil", ["groundhog", 11]]
// ];
// INPUT: zooInventory(myZoo);
// OUTPUT:
// [
//     'King Kong the gorilla is 42', 
//     'Nemo the fish is 5',
//     'Punzsutawney Phil the groundhog is 11'
// ]

var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];

function zooInventory(myZoo) {
    var myArray = [];
    myZoo.forEach(function(zoo) {
        var result = `${zoo[0]} the ${zoo[1][0]} is ${zoo[1][1]}`;
        myArray.push(result);
    });
    console.log(myArray);
}

console.log(zooInventory(myZoo));