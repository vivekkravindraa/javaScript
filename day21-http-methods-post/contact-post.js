// passing object as parameter to function

var axios = require('axios');

function ContactForm(data) {
    this.name = data.name;
    this.email = data.email;
    this.mobile = data.mobile;
    this.message = data.message;

    this.submit = function() {
        var dataToSend = {
            name: this.name,
            email: this.email,
            mobile: this.mobile,
            message: this.message
        };
        // console.log(dataToSend);
        axios.post('http://dct-api-data.herokuapp.com/contact_forms.json',dataToSend)
        .then(function(response) {
            console.log('Data coming from the server this time');
            console.log(response.data);
        })
        .catch(function(error) {
            // console.log(errors);
            // server side errors being displayed in the UI
            console.log('These error/s prohibited the form from being saved:');
            var errors = error.response.data;
            for(var key in errors) {
                console.log(key, errors[key].join(', '));
            }
        });
    }
}

var cf1 = new ContactForm({name: 'vivek', email: 'vivek@gmail.com', mobile: '9148325135', message: 'call me back'});
cf1.submit();

// var cf2 = new ContactForm({name: '', email: '', mobile: '', message: ''});
// cf2.submit();