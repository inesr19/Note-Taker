const path = require('path');

module.exports = function (app) {
//define landing page route 
// use index.html inside public folder 
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

// note page route 
// use notes.html inside public folder
    app.get('/notes', function(req, res){
      res.sendFile(path.join(__dirname + '/../public/notes.html'));
  });
}