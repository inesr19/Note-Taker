const path = require('path');
const fs = require('fs');
const data = require('../db/db.json');

module.exports = function (app) {
    app.get('/api/notes', function(req, res) {
        res.json(data);
    });

    app.get('/api/notes/:id', function (req, res) {
        res.json(data[Number(req.params.id)]);
    })
    
    app.post('/api/notes', function (req, res) {
        const note = req.body;
        data.push(note.title, note.text);
        res.status(201);
        res.end();
    })
}