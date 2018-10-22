var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(3000, function () {
  console.log('Gif Search listening on port localhost:3000!');
});
app.get('/yo-squirrel', function(req, res) {
    res.send("Yo, squirrel");
});
app.get('/', function(req, res) {
    var gifUrl = 'https://media.giphy.com/media/3d2wgrPNcBqocFzFbJ/giphy.gif'
    res.render('yo-musk', {gifUrl: gifUrl})
});
