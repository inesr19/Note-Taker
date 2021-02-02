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

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
  })
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
app.listen(PORT, function(){
    console.log('App is listening on PORT: ' + PORT);
});