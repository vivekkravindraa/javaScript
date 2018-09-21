var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];


function sortArrayOfObjects(a){
    if(a.length < 1) {
        return [];
    }
    var result = a.sort(function(b,c) {
        return c.libraryID - b.libraryID;
    });
    return result;
}
console.log(sortArrayOfObjects(library));