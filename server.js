// add express server
const http = require('http')
const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
const PORT = 3000;

// include midleware to parse json
app.use(bodyParser.urlencoded({ extended: false }));

// html routes (routes that will serve websites)
//define landing page route 
  // use index.html inside public folder
// note page route 
  // use notes.html inside public folder
//API routes 
// post route to save a note 
  // ADD the new note to the db.json
// get route to get all notes
// put route to update a note (app.put())
// delete route to delete a note
// invoke listen function on express app