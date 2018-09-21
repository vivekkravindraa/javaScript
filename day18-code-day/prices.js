var products = [
    {
        name: 'marker',
        price: 15,
        category: 'stationary'
    },
    {
        name: 'scale',
        price: 10,
        category: 'general'
    },
    {
        name: 'erazer',
        price: 5,
        category: 'general'
    }
]
function listProducts(product) {
    for(var i = 0; i < product.length; i++) {
        // console.log(`${product[i].name} - ${product[i].price}`);
        // if(product[i].price >= 10) {
        //     console.log(`${product[i].name}`);
        // }
        // if(product[i].category === 'general') {
        //     console.log(`${product[i].name}`);
        // }
        if(product[i].price >= 10 && product[i].category === 'stationary') {
            console.log(`${product[i].name}`);
        }
    }
}
console.log(listProducts(products));