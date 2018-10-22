console.log('Starting app');

const fs = require('fs');
// const os = require('os');
const notes = require('./notes.js');
const yargs = require('yargs')

const argv = yargs.argv;
// var res = notes.addNote();
// console.log(res)
// var added = notes.add(3,4);
// console.log(added)

// var command = process.argv[2]
var command = argv._[0]

console.log(`Command: ${process.argv}`)
console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === 'add'){
    notes.addNote(argv.title, argv.body)
}else if (command === 'list'){
    notes.getAll();
}else if(command === 'remove'){
    notes.removeNote(argv.title);
}else if(command === 'read'){
    notes.readNote(argv.title);
}
else{
    console.log('Command not recognized');
}


// var user = os.userInfo()
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function (err) {
//     if(err){
//         console.log('Unable to write to file');
//     }
// })
