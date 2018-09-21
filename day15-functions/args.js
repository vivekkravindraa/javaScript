var details = function(name, city) {
    console.log(name);
    console.log(city);
    console.log(arguments);
}

details('ani','bangalore');

// 1 extra args, being ignored in params list, but still avialable in arguments
details('ani','bangalore','0123456789');

// 1 less, params now hold the undefined for the missing args
details('ani');