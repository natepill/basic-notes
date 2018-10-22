console.log('Starting notes.js');

var addNote = (title, body) => {

    console.log('Adding note', title, body)

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
