const path = require('path');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./Develop/db/db.json', 'utf8'));

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
        
        fs.writeFileSync('./Develop/db/db.json', JSON.stringify(data), function(err) {
            if(err) throw(err);
        })
        res.json(data);
    })
}