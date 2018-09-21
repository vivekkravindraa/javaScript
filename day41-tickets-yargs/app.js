const { Ticket } = require('./ticket');
// yargs installation           // npm install --save yargs
// requiring 'yargs' package    // const argv = require('yargs').argv;  OR
const { argv } = require('yargs');

/*  node filename command options ::
node app.js save --name="Ani" --department="Technical" --priority="High" --message=""
node app.js findAll
node app.js findByCode --code="DCT-aaa6"
node app.js findByPriority --priority="High"
node app.js findOneAndUpdate --code="DCT-bcc1" --params.name="Virat" --params.department="Sales"
node app.js findOneAndDelete --code="DCT-bcc1"
*/

let command = argv._[0];
if(command == 'findAll') {
    Ticket.findAll();
} else if(command == 'save') {
    let ticket = new Ticket({
        name: argv.name,
        department: argv.department,
        priority: argv.priority,
        message: argv.message
    });
    ticket.save();
} else if(command == 'findByCode') {
    Ticket.findByCode(argv.code);
} else if(command == 'findByPriority') {
    Ticket.findByPriority(argv.priority);
} else if(command == 'findOneAndUpdate') {
    Ticket.findOneAndUpdate(argv.code,argv.params);
} else if(command == 'findOneAndDelete') {
    Ticket.findOneAndDelete(argv.code);
}
else {
    console.log('Invalid Command');
}

// To Save and Reset

// let ticket = new Ticket({
//     name: 'Arjun',
//     department: 'Technical',
//     priority: 'High',
//     message: 'Internet is not working'
// });

// ticket.save();               // saves the tickets to the DB

// console.log(ticket);         // display the ticket
// ticket.reset();              // reset the ticket
// console.log(ticket);         // display after the ticket resets

// To findAll
// Ticket.findAll();

// To findByCode
// let code = 'DCT-6d66';
// Ticket.findByCode(code);

// To findByPriority
// let priority = 'High';
// Ticket.findByPriority(priority);

// To findOneAndUpdate
// let code = 'DCT-16b9';
// Ticket.findOneAndUpdate(code,{
//     status: 'open',
//     priority: 'Low'
// });

// To findOneAndDelete
// let code = 'DCT-16b9';
// Ticket.findOneAndDelete(code);