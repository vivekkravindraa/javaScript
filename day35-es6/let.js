// variables created using var in javascript is function scoped
// variables created using let in javascript is block {} scoped

let players = ['sachin','virat','dhoni'];

function listPlayers() {
    for(var i = 0; i < players.length; i++) {
        console.log(players[i]);
    }
    console.log(i);     // 3
}
listPlayers();
// console.log(i);         // ReferenceError: i is not defined (not available outside the function)

function displayPlayers() {
    for(let j = 0; j < players.length; j++) {
        console.log(players[j]);
    }
    // console.log(j);     // ReferenceError: j is not defined (not available outside the block of code)
}
displayPlayers();
// console.log(j);         // ReferenceError: j is not defined (not available outside the block of code)

(function() {
    var n1 = 10;
    if(n1 === 10) {
        var inString = 'ten';
    }
    console.log(n1);        // 10
    console.log(inString);  // 'ten'
}) ();

(function() {
    let a1 = 10;
    if(a1 === 10) {
        let inStr = 'ten';
        console.log(inStr);
        // (function() {
        //      console.log(inStr);     // still available inside the function
        // })();
    }
    console.log(a1);        // 10
    // console.log(inStr);  // ReferenceError: inStr is not defined
}) ();