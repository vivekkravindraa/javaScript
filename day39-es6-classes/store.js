class Invoice {
    constructor(name,price,quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    generateBill() {
        return `
NAME - ${this.name} PRICE - ${this.price} QTY - ${this.quantity} TOTAL - ${this.price * this.quantity}
                `;
    }
}

let i1 = new Invoice('Marker',15,3);
console.log(i1.generateBill());

let i2 = new Invoice('Scale',10,2);
console.log(i2.generateBill());