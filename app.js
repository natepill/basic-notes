console.log('Starting app');

const fs = require('fs');
// const os = require('os');
const notes = require('./notes.js');
const yargs = require('yargs')



const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}





const argv = yargs
.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note',{
    title: titleOptions
    })
.command('remove', 'Remove a note', {
    title: titleOptions
})
.help()
.argv;
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
    var note = notes.addNote(argv.title, argv.body)
    if (typeof note === "object"){
        console.log("Note Added")
        notes.logNote(note);

    }
    else{
        console.log("Note title in use!")
    }
}else if (command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => {
        notes.logNote(note)
    });
    //or can have
    // allNotes.forEach((note) => notes.logNote(note));




}else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'No notes were removed' : 'Note was removed'
    console.log(message)
}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(typeof note === "object"){
        console.log("Note read")
        notes.logNote(note);
    }else{
        console.log("Note not found!")
    }

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
