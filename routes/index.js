// bring in the express module
const express = require("express");

// import the modular router for notes
const notes = require("./notes.js");

const app = express();

app.use("/notes", notes);

module.exports = app;