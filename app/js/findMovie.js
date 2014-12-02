'use strict';

var $ = require('jquery');

//get the input movieName from user, console.log
//the data and append the Rating to '#app' from json
var findMovie = function(movieName) {
  $.get('/' + movieName, function(movieData) {
    console.log(movieData);
    $('#app').append('Movie Rating is: ' + movieData.imdbRating);
  });
};

module.exports = findMovie;
