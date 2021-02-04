const path = require('path');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

module.exports = function (app) {
    app.get('/api/notes', function(req, res) {
        res.json(data);
    });

    app.get('/api/notes/:id', function (req, res) {
        res.json(data[req.params.id]);
    })

    app.post('/api/notes', function (req, res) {
        const note = req.body;
        const newId = (data.length).toString();
        note.id = newId;
        data.push(note);
        
        fs.writeFileSync('./db/db.json', JSON.stringify(data), function(err) {
            if(err) throw(err);
        })
        res.json(data);
    })

    app.put('/api/notes', function (req, res) {
        
    });

    app.delete('/api/notes/:id', function (req, res) {
       
    })

}