// Your job is to create a class Dictionary which you can add words to and their entries. Example:
// >>> let d = new Dictionary();
// >>> d.newEntry("Apple", "A fruit that grows on trees");

// >>> console.log(d.look("Apple"));
// A fruit that grows on trees

// >>> console.log(d.look("Banana"));
// Cant find entry for Banana

class Dictionary {
    constructor(fruitName, description) {
        this.fruitName = fruitName;
        this.description = description;
        Dictionary.data.push(this);
    }
    newEntry(fruitName, description) {
        this.fruitName = fruitName;
        this.description = description;
    }
    look(fruit) {
        var result = Dictionary.data.filter(function(word) {
            return word.fruitName === fruit;
        })
        if(result.length > 0) {
            return `${this.description}`;
        } else {
            return `Can't find entry for Banana`;
        }
    }
}

Dictionary.data = [];

let d = new Dictionary();
d.newEntry('Apple','A fruit that grows on trees');
console.log(d.look('Apple'));
console.log(d.look('Banana'));