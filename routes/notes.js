const notes = require("express").Router();
const fs = require("fs");
// this brings in the uuid module, to create unique userids
const {v4 : uuidv4 } = require("uuid");

// bring in the helper fsUtils file for reading and appending to the db.json file
const { readFromFile, appendToFile } = require("../helper/fsUtils");

// location of the db.json file set as a const so that it can be reused
const jsonFile = "./db/db.json";

// GET route for retrieving from the db.json file
notes.get("/", (req, res) => {
    // boilerplate info logging
    console.info(`${req.method} request received for notes`);
    // readFromFile returns a promisified data, which is then sent back as a response
    readFromFile(jsonFile).then((data) => res.json(JSON.parse(data)));
    /* This is an example left here for testing purposes
    fs.readFile("./db/db.json", (err, data) => {
        if (err) {
            console.info(err);
        } else {
            res.send(JSON.parse(data));
        };
    });*/
});

notes.post("/", (req, res) => {
    // gets the title and text of the note that were sent by the user
    const {title, text} = req.body;
    // generates a new userID
    const id = uuidv4();
    const newNote = {
        id,
        title,
        text
    };
    appendToFile(newNote, jsonFile);
    res.send(`Information submitted with User ID: ${id}`);
})

module.exports = notes;