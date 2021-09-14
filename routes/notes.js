const notes = require("express").Router();
const fs = require("fs");

// bring in the helper fsUtils file for reading and appending to the db.json file
const { readFromFile, appendToFile } = require("../helper/fsUtils");

// GET route for retrieving from the db.json file
notes.get("/", (req, res) => {
    // boilerplate info logging
    console.info(`${req.method} request received for notes`);
    // readFromFile returns a promisified data, which is then sent back as a response
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
    /*fs.readFile("./db/db.json", (err, data) => {
        if (err) {
            console.info(err);
        } else {
            res.send(JSON.parse(data));
        };
    });*/
});

module.exports = notes;