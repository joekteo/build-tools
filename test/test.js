'use strict';

var chai = require('chai');
var request = require('superagent');
var chaihttp = require('chai-http');
var expect = chai.expect;

chai.use(chaihttp);
require('../../server');

describe('Server', function() {
  it('should return with rating of movie', function(done) {
    chai.request('http://localhost:3000')
    .post('/')
    .send('http://www.omdbapi.com/?t=spiderman&y=&plot=short&r=json')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body).to.include.keys('movieData.imdbRating');
      done();
    });
  });
});
