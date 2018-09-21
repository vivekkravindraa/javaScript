// Object Prototype Function = Object Constructor Function -> with arguments

function Song(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
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

var song = new Song('Minutes to Midnight', 'Linkin Park', '4 Minutes 20 Seconds');
console.log(song);
var song1 = new Song('Sacrifice','Linkin Park','4 Minutes');
console.log(song1);