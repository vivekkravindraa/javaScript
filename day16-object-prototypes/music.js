// Object Prototype :
// sometimes we need a blueprint for creating many objects of the same type.
// Object prototype functions are object-constructor-functions allows us to create an object type.
// Objects of the same type is created by calling the constructor function with a new keyword.
// 'this' inside an object always refers to the object.

var song = {
    name: 'Numb',
    artist: 'Linkin Park',
    duration: '4 Mins',
    play: function(){
        return `${this.name} by ${this.artist} duration is ${this.duration} is PLAYING`;
    },
    stop: function(){
        return `${this.name} by ${this.artist} is STOPPED`;
    }
}

console.log(song.play());
console.log(song.stop());

var song1 = {
    name: 'Kaagadhadha Doniyalli',
    artist: 'Vaasuki Vybhav',
    duration: '4 Mins 30 Seconds',
    play: function(){
        return `${this.name} by ${this.artist} duration is ${this.duration} is PLAYING`;
    },
    stop: function(){
        return `${this.name} by ${this.artist} is STOPPED`;
    }
}

console.log(song1.play());
console.log(song1.stop());

var song2 = {
    name: 'Kar Har Maidaan Fateh',
    artist: 'Sukwinder Singh',
    duration: '5 Mins 10 Seconds',
    play: function(){
        return `${this.name} by ${this.artist} duration is ${this.duration} is PLAYING`;
    },
    stop: function(){
        return `${this.name} by ${this.artist} is STOPPED`;
    }
}

console.log(song2.play());
console.log(song2.stop());