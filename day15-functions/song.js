var song = {
    name: 'Numb',
    artist: 'Linkin Park',
    minutes: 4,
    seconds: 3,
    genre: '80s',
    playing: false,
    play: function() {
        if(!this.playing) {
            this.playing = true;
            console.log('Playing ' + this.name + ' by ' + this.artist);
        }
    },
    pause: function() {
        if(this.playing) {
            this.playing = false;
        }
    }
}

console.log(song.play());
console.log(song.pause());