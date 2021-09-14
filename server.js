// boilerplate server.js code copied from previous Georgia Tech exercises
const express = require('express');
const path = require('path');
// an index.js file with routes using modular routing
const api = require('./routes/index.js');

const PORT = process.env.PORT;
if (PORT == null || PORT == "") {
    PORT = 3001;
}

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for index.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for the notes.html file
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);