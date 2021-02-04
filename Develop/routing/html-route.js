const { fstat } = require('fs');
const path = require('path');

module.exports = function (app) {
    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname + '/../Public/index.html'));
    });

// note page route 
// use notes.html inside public folder
    app.get('/notes', function(req, res){
      res.sendFile(path.join(__dirname + '/../Public/notes.html'));
  });
}