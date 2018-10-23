console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {

    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);

    }catch(err){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

};


var addNote = (title, body) => {

    var notes =  fetchNotes();
    var note =
    {
        title: title,
        body: body
    };




    var duplicateNotes = notes.filter((note) => note.title === title);
        //This function is called back once for every item in the array

    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note
    }

};


var getAll = () => {
    console.log('getting all notes')
};

var removeNote = (title) => {
    console.log("REMOVING NOTES!!!!!!!")
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    //We fetch existing notes, then we store all the notes that dont match the title of the note we're trying to remove with into filterednotes
    //We save the filteredNotes array which has removed the desired note

    return notes.length === filteredNotes.length;

};

var readNote = (title) => {

};



// If you want to use any of the functions or variables above, you must export them using ES6 conventions
module.exports = {
    addNote: addNote,
    // For ES6 we can leave out the : addNote if we want because ES6 allows us set object attributes and values that are exactly the same we can just have the name of the function/variable to be assigned as the value
    getAll: getAll,

    removeNote: removeNote,

    readNote: readNote


}
