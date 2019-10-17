var movies = require("../models/movies");

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
