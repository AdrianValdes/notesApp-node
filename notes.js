const fs = require("fs");
const chalk = require("chalk");

//Read
function readNote({ title }) {
  let notes = loadNotes();

  let note = notes.find((note) => note.title === title);
  if (!title) {
    console.log("You have to provide a title");
  } else if (note) {
    console.log(chalk.green(`Title: ${note.title} \n`) + `Body: ${note.body}`);
  } else {
    console.log(
      chalk.red.inverse(`The note with the title "${title}", does not exist`)
    );
  }
}

//List
function listNotes() {
  let notes = loadNotes();
  if (notes.length === 0) {
    console.log("You have no notes");
  } else {
    let template = chalk.green(`Your notes: \n`);
    notes.forEach((note, i) => {
      template += `${i + 1}- "${note.title}" \n`;
    });
    console.log(template.trim());
  }
}

//Add
function addNote({ title, body }) {
  let notes = loadNotes();
  let duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    const newNotes = [...notes, { title, body }];
    saveNotes(newNotes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(
      chalk.red.inverse("That title is already taken, please use a new title.")
    );
  }
}

//Remove
function removeNote({ title }) {
  let notes = loadNotes();
  let notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(
      chalk.green.inverse(
        `Note with the title: "${title}", successfully deleted!`
      )
    );
  } else {
    console.log(
      chalk.red.inverse(`There is no note with the title "${title}"`)
    );
  }
}

//Helper functions
//load
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
//save
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("./notes.json", dataJSON);
};

module.exports = { addNote, removeNote, listNotes, readNote };
