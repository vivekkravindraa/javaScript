// Object Prototype Function = Object Constructor Function -> without arguments

// function declaration
// function name in Pascal Case
function Song() {
    // properties - name, artist, duration
    // methods - description, play, stop
    this.name;
    this.artist;
    this.duration;
    this.description = function() {
        return `${this.name} by ${this.artist} is ${this.duration} long`;
    };
    this.play = function() {
        return `${this.name} by ${this.artist} duration is ${this.duration} is PLAYING`;
    };
    this.stop = function() {
        return `${this.name} by ${this.artist} is STOPPED`;
    };
}

// var obj = new Object();
// var arr = new Array();

var song = new Song();
song.name = 'In the end';
song.artist = 'Linkin Park';
song.duration = '4 Mins 40 Seconds';
console.log(song.description());
console.log(song.play());
console.log(song.stop());

var song1 = new Song();
song1.name = 'Leave out all the rest';
song1.artist = 'Linkin Park';
song1.duration = '3 Mins 40 Seconds';
console.log(song1.description());
console.log(song1.play());
console.log(song1.stop());