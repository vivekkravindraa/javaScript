function Car(model, manufacturer, carState) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.carState = carState;
    this.xAxis = 0;
    this.start = function() {
        this.carState = true;
        return `the engine started`;
    };
    this.stop = function() {
        this.carState = false;
        return `the engine stopped`;
    };
    this.drive = function() {
        if(this.carState) {
            this.xAxis++;
            return `the car is moving`;
        } else {
            return `start the car first`;
        }
    },
    this.currentPosition = function() {
        return `I'm at x-Axis position ${this.xAxis}`;
    },
    this.reset = function() {
        this.xAxis = 0;
        this.carState = false; 
        return `x-Axis resets to ${this.xAxis}, Car State resets to ${this.carState}`;
    }
}

var v1 = new Car('Maruthi','Swift',false);
console.log(v1.drive());
console.log(v1.start());
console.log(v1.drive());
console.log(v1.currentPosition());
console.log(v1.drive());
console.log(v1.currentPosition());
console.log(v1.stop());