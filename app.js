const { addNote, removeNote, listNotes, readNote } = require("./notes.js");
const yargs = require("yargs");

//add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: { describe: "Note title", demandOption: true, type: "string" },
    body: { describe: "Note body", demandOption: true, type: "string" },
  },
  handler({ title, body }) {
    addNote({ title, body });
  },
});

//remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: { describe: "Note to delete", demandOption: true, type: "string" },
  },
  handler({ title }) {
    removeNote({ title });
  },
});

//List command
yargs.command({
  command: "list",
  describe: "List the notes",
  handler() {
    listNotes();
  },
});

//Read command
yargs.command({
  command: "read",
  describe: "Read the note",
  builder: {
    title: { describe: "Read note", demandOption: true, type: "string" },
  },
  handler({ title }) {
    readNote({ title });
  },
});

yargs.parse();
