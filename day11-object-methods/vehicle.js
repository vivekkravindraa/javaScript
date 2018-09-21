var car = {
    model: 'Swift',
    manufacturer: 'Maruthi',
    carState: false,
    xAxis: 0,
    start: function() {
        this.carState = true;
        return `the engine started`;
    },
    stop: function() {
        this.carState = false;
        return `the engine stopped`;
    },
    drive: function() {
        if(this.carState) {
            this.xAxis++;
            return `the car is moving`;
        } else {
            return `start the car first`;
        }
    },
    currentPosition: function() {
        return `I'm at x-Axis position ${this.xAxis}`;
    },
    reset: function() {
        this.xAxis = 0;
        this.carState = false;
        return `x-Axis resets to ${this.xAxis}, Car State resets to ${this.carState}`;
    }
}

console.log(car.currentPosition());

console.log(car.drive());
console.log(car.start());
console.log(car.stop());

console.log(car.drive());
console.log(car.start());

console.log(car.drive());
console.log(car.stop());

console.log(car.drive());
console.log(car.start());
console.log(car.currentPosition());

console.log(car.drive());
console.log(car.start());
console.log(car.currentPosition());

console.log(car.reset());
console.log(car.currentPosition());