// add express server
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

// create express app
const app = express();
const PORT = process.env.PORT || 8080;


// include middleware to parse json
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static('public'));

//API routes 
require('./routing/api-route')(app);

// html routes (routes that will serve websites)
require('./routing/html-route')(app);
 
// invoke listen function on express app
app.listen(PORT, function(){
    console.log('App is listening on PORT: ' + PORT);
});