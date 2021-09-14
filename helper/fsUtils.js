const fs = require("fs");
// brings in util, which will be used to promisify the readFromFile
const util = require("util");

/* this will promisify the fs.readFile, so that it returns a promise
this is chosen instead of a more modern method for compatibility with Node 8 
one advantage is not needing to write out an async wait function*/
const readFromFile = util.promisify(fs.readFile);

const appendToFile = (content, file) => {
    fs.readFile(file, "utf8", (err, data) => {
        if(err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            fs.writeFile(file, JSON.stringify(parsedData, null, 2), (err) =>
            err ? console.error(err) : console.info(`\nData has been written to ${file}`));
        };
    });
};

module.exports = { readFromFile, appendToFile };