var movies = require("../models/movies");
var movieTemplate = require('../models/omdb')
var omdb = require('omdb-client')

module.exports = function(app) {
  // Get all examples
  app.get("/movies", function(req, res) {
    
   res.send('get all movies')
  });

  // Create a new example
  app.post("/movies/watched", function(req, res) {
    res.send('watched movies')
  });

  app.post("/movies/unwatched", function(req, res) {
    res.send('unwatched movies')
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
   


  // Create a new example
  router.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  router.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });

  });
};
