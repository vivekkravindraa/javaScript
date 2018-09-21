var product = {
    name: 'Marker',
    price: 15,
    description: 'White Board Marker',
    details: function() {
        return `${this.name} - ${this.price} - ${this.description}`;
    }
}

console.log(product.details());