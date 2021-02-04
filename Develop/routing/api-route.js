const path = require('path');
const fs = require('fs');
const data = require('../db/db.json');

module.exports = function (app) {
    app.get('/api/notes', function(req, res) {
        res.json(data);
    });

    app.post('/api/notes', function (req, res) {
        const notes = req.body;
        data.push(notes.title, notes.text);
        res.status(201);
        res.end();

    })
}