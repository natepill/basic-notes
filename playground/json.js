// var obj = {
//
//     name: 'Andrew'
//
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
//
// var personString = '{"name": "Andrew", "age": "25"}';
// var person = JSON.parse(personString);
//
// console.log(typeof person)
// console.log(person)


const fs = require('fs');

var originalNote =
{title: 'TITLE',
 body: 'BODY' };

 //originalNote sync
 //convert originalNote to a string

var originalNoteString = JSON.stringify(originalNote)

fs.writeFileSync('notes.json', originalNoteString)

var noteString = fs.readFileSync('notes.json')
//convert back to json object: note
var note = JSON.parse(noteString);


console.log(typeof note)
console.log('title: ', note.title)
console.log('body: ', note.body)
