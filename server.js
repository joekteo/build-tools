'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var request = require('superagent');
var app = express();

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/:title', function(req, res) {
  var url = 'http://www.omdbapi.com/?' +
  't=' +
  req.params.title +
  '&y=' +
  '&plot=short' +
  '&r=json';
  request
    .get(url)
    .end(function(req, movieData) {
      var parsedData = JSON.parse(movieData.text);
      res.json(parsedData);
    });
});

app.get('/', function(req, res) {
  res.sendfile('index.html');
  console.log(res);
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server on port', app.get('port'));
});
