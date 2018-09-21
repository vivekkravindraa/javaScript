class Car {
    constructor(data = {}) {
        this.name = data.name; 
        this.make = data.make;
        this.color = data.color;
        this.brand = data.brand;
        this.fuelType = data.fuelType;
        this.seater = data.seater;
        this.xAxis = 0;
    }
    details() {
        return `
NAME: ${this.name}
MAKE: ${this.make}
COLOR: ${this.color}
BRAND: ${this.brand}
FUEL-TYPE: ${this.fuelType}
SEATER: ${this.seater}
        `;
    }
    reset() {
        this.xAxis = 0;
    }
    move() {
        this.xAxis++;
        return this.xAxis;
    }
    reverse() {
        this.xAxis--;
        return this.xAxis;
    }
    getPosition() {
        return `${this.name} - ${this.xAxis}`;
    }
}

// Changes / Additions to the object should be made in this file

module.exports = {
    Car
}