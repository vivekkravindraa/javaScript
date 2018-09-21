let add = (a = 0,b = 0) => {
    return a + b;
}

let sub = (a = 0,b = 0) => {
    return a - b;
}

let city = 'bangalore';

// exporting modules to other file (index.js)

module.exports = {
    //  add: add,
    //  sub: sub,
    //  city: city

    //  using concise properties and methods

    add,
    sub,
    city
}