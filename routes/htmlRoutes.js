var movies = require("../models/movies");

module.exports = function(app) {

  app.get("/home", function(req, res) {
    res.render("home");
  });

  app.get("/movies/unwatched", function(req, res) {
    res.render("ondeck");
  });
  
  app.get("/movies/watched", function(req, res) {
    res.render("watched");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
