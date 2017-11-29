
var express = require("express");
var path = require("path");
var app = express();
var session = require('express-session');
var PORT = 8000;

app.use(session({secret: 'codingdojorocks'}));  // string for encryption

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view

app.get('/', function(req, res) {
 req.session.count = 1;
 res.render("index", {session: req.session});
})

app.get('/plus_one', function(req, res) {
  if (req.session.count){
    req.session.count ++;
  }
  else{
    req.session.count = 1;
  }
 res.render("index", {session: req.session});
})

app.get('/plus_two', function(req, res){
  if (req.session.count){
    req.session.count += 2;
  }
  else{
    req.session.count = 1;
  }
  res.render("index", {session: req.session});
})

app.get('/reset', function(req, res){
  req.session.count = 1;
  res.render("index", {session: req.session});
})


app.listen(PORT, function() {
 console.log(`listening on port ${PORT}`);
});
