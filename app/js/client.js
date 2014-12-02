'use strict';

var $ = require('jquery');
var findMovie = require('./findMovie');

//when clicking '#submit' grab the value
//from movieInput value and call findMovie
//and pass in the input
$('#submit').on('click', function() {
  var input = $('#movieInput').val();
  findMovie(input);
});
