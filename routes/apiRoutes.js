var movies = require("../models/movies");
var movieTemplate = require('../models/omdb')
var omdb = require('omdb-client')

module.exports = function(app) {
  // Get all examples
  app.get("/movies", function(req, res) {
    
   res.send('get all movies')
  });

  app.post("/movies/watched", function(req, res) {
    res.send('watched movies')
  });

  app.post("/movies/unwatched", function(req, res) {
    res.send('unwatched movies')
  });
};
