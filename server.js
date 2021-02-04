// add express server
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


// create express app
const app = express();
const PORT = process.env.PORT || 8080;


// include midleware to parse json
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//API routes 
require('./Develop/routing/api-route')(app);

// html routes (routes that will serve websites)
require('./Develop/routing/html-route')(app);
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