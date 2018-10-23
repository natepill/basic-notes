console.log('Starting notes.js');

const fs = require('fs');


var addNote = (title, body) => {

    var notes =  [];
    var note =
    {
        title: title,
        body: body
    };

    try{
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);

    }catch(err){}


    var duplicateNotes = notes.filter((note) => note.title === title);
        //This function is called back once for every item in the array

    if (duplicateNotes.length === 0){

        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};


var getAll = () => {
    console.log('getting all notes')
};

var removeNote = (title) => {
    console.log('removing ', title)
};

var readNote = (title) => {
    console.log('reading ', title )
};



// If you want to use any of the functions or variables above, you must export them using ES6 conventions
module.exports = {
    addNote: addNote,
    // For ES6 we can leave out the : addNote if we want because ES6 allows us set object attributes and values that are exactly the same we can just have the name of the function/variable to be assigned as the value
    getAll: getAll,

    removeNote: removeNote,

    readNote: readNote


}
