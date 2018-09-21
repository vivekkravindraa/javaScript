var names = ['rajesh','ramesh','suresh'];

for(var i = 0; i < names.length; i++) {
    console.log(i);
    console.log(names);
    console.log(names[i]);
}

names.forEach(function(name) {
    console.log(name);
});

names.forEach(function(name, index) {
    console.log(`${name} is found at ${index} index`);
});