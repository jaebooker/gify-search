var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');
var http = require('http');

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
    var queryString = req.query.term;
    var term = encodeURIComponent(queryString);
    var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC'
    http.get(url, function(response) {
        response.setEncoding('utf8');
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            var parsed = JSON.parse(body);
            res.render('home', {gifs: parsed.data})
        });
    });
    res.render('yo-musk', {gifUrl: gifUrl})
});
