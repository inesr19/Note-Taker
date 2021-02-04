// add express server
const path = require('path');
const express = require('express');

// create express app
const app = express();
const PORT = process.env.PORT || 8080;


// include midleware to parse json
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));
//API routes 
require('./routing/api-route')(app);

// html routes (routes that will serve websites)
require('./routing/html-route')(app);
//define landing page route 
  // use index.html inside public folder  

// post route to save a note 
  // ADD the new note to the db.json
// get route to get all notes
// put route to update a note (app.put())
// delete route to delete a note
// invoke listen function on express app
app.listen(PORT, function(){
    console.log('App is listening on PORT: ' + PORT);
});