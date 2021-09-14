const fs = require("fs");
// brings in util, which will be used to promisify the readFromFile
const util = require("util");

/* this will promisify the fs.readFile, so that it returns a promise
this is chosen instead of a more modern method for compatibility with Node 8 
one advantage is not needing to write out an async wait function*/
const readFromFile = util.promisify(fs.readFile);

const appendToFile = (content, file) => {
    const fileInMem = readFromFile(file);
    fileInMem.push(content);
    fs.writeFile(file, JSON.stringify(fileInMem));
};

module.exports = { readFromFile, appendToFile };