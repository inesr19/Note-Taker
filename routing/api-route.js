const path = require('path');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

module.exports = function (app) {
    // get route to get all notes
    app.get('/api/notes', (req, res) => {
        res.json(data);
    });

    app.get('/api/notes/:id', (req, res) => {
        res.json(data[req.params.id]);
    })

    // post route to save a note 
    app.post('/api/notes', (req, res) => {
        const note = req.body;
        const newId = (data.length).toString();
        note.id = newId;
        data.push(note);
        
        // ADD the new note to the db.json
        fs.writeFileSync('./db/db.json', JSON.stringify(data), function(err) {
            if(err) throw(err);
        })
        res.json(data);
    })

    // put route to update a note (app.put())
    app.put('/api/notes', function (req, res) {
        
    });

    // delete route to delete a note
    app.delete('/api/notes/:id', function (req, res) {
      
    })

}