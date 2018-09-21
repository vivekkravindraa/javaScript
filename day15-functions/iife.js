// immediately invoke function expression

// without arguments

// wrap the function and call it at the end

(function() {
    console.log('loading .html');
    console.log('loading .css');
    console.log('loading .js');
})();

// with arguments

(function(n1,n2) {
    console.log(n1 + n2);
})(10,20);

// // function loadingScript() {
//     console.log('loading .html');
//     console.log('loading .css');
//     console.log('loading .js');
// }
// loadingScript();