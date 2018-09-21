var axios = require('axios');
var url = `https://jsonplaceholder.typicode.com/users`;
axios.get(url)
.then(function(response) {
    // for(var i = 0; i < response.data.length; i++) {
    //     console.log('name:',response.data[i].name);
    //     console.log('username:', response.data[i].username);
    //     console.log('email:',response.data[i].email);
    //     console.log('address:',`${response.data[i].address.street}, ${response.data[i].address.suite}`);
    //     console.log('city:',response.data[i].address.city);
    //     console.log('zipcode:',response.data[i].address.zipcode);
    //     console.log('geo:',`${response.data[i].address.geo.lat}, ${response.data[i].address.geo.lng}`);
    //     console.log('phone:',response.data[i].phone);
    //     console.log('website:',response.data[i].website);
    //     console.log('company:',response.data[i].company.name); // console.log('\n');
    // }
    response.data.forEach(function(user) {
        console.log('name:',user.name);
        console.log('username:',user.username);
        console.log('email:',user.email);
        console.log('address:',`${user.address.street}, ${user.address.suite}`);
        console.log('city:',user.address.city);
        console.log('zipcode:',user.address.zipcode);
        console.log('geo:',`${user.address.geo.lat}, ${user.address.geo.lng}`);
        console.log('phone:',user.phone);
        console.log('website:',user.website);
        console.log('company:',user.company.name);
        console.log('\n');
    });
})
.catch(function(err) {
    console.log(err);
});