// Write a javascript function, which takes 2 arguments,
// 1st an array of products and the second argument the id of the product

var products = [
    {
        "id": 1,
        "name": "Rustic Marble Computer",
        "price": 7997.0,
        "category": "Computers",
        "stock": 647,
        "cod_eligible": true
    },
    {
        "id": 2,
        "name": "Sleek Copper Clock",
        "price": 6177.0,
        "category": "Computers",
        "stock": 436,
        "cod_eligible": true
    },
    {
        "id": 3,
        "name": "Ergonomic Concrete Pants",
        "price": 1732.0,
        "category": "Baby",
        "stock": 68,
        "cod_eligible": true
    },
    {
        "id": 4,
        "name": "Gorgeous Linen Table",
        "price": 4667.0,
        "category": "Tools",
        "stock": 123,
        "cod_eligible": true
    },
    {
        "id": 5,
        "name": "Heavy Duty Silk Knife",
        "price": 3348.0,
        "category": "Grocery",
        "stock": 37,
        "cod_eligible": true
    },
    {
        "id": 6,
        "name": "Incredible Plastic Hat",
        "price": 4277.0,
        "category": "Electronics",
        "stock": 517,
        "cod_eligible": true
    },
    {
        "id": 7,
        "name": "Ergonomic Plastic Coat",
        "price": 8983.0,
        "category": "Baby",
        "stock": 420,
        "cod_eligible": true
    },
    {
        "id": 8,
        "name": "Enormous Rubber Table",
        "price": 6342.0,
        "category": "Music",
        "stock": 583,
        "cod_eligible": true
    },
    {
        "id": 9,
        "name": "Heavy Duty Marble Table",
        "price": 9158.0,
        "category": "Kids",
        "stock": 447,
        "cod_eligible": true
    },
    {
        "id": 10,
        "name": "Intelligent Silk Bench",
        "price": 8902.0,
        "category": "Garden",
        "stock": 72,
        "cod_eligible": true
    }]

// Test Case: 

// 1. findProduct(products, 9); 
// returns { "id": 9, "name": "Heavy Duty Marble Table", "price": 9158.0, "category": "Kids", "stock": 447, "cod_eligible": true }

// 2. findProduct(products, 100);
//  returns 'No product found with id = 100'

function findProduct(a, b) {
    // for {
    //     if(product.id === b) {
    //         console.log(product);
    //     } else if(product.id !== b) {
    //         console.log(`No product found with id = ${b}`);
    //     }
    // });

    for(var i = 0; i < a.length; i++) {
        var myArray = [];
        if(a[i].id === b) {
            myArray.push(a[i]);
            return myArray[0];
        }
    }
    return `No product found with id = ${b}`;
}

console.log(findProduct(products,9));
console.log(findProduct(products,100));