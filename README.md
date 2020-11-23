# notesApp-node

# How to use prepare the notes-taking-app

1. Clone the repository
2. On the terminal `npm install` to install the dependencies.

# Using the app

## The app use `yargs` to parse the arguments taken from the command line.

##### 1. To add a new note run `node app.js add --title="{your title}" --body="{content of your note}"`.

##### 2. To remove a note run `node app.js remove --title="{your title}"`

##### 3. To list all the titles of your notes run `node app.js list`

##### 4. To read the content of one note run `node app.js --title="{title of the note to read}"`

## Notes

### All the changes are done in the notes.json file
