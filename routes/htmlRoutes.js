var movies = require("../models/movies");

module.exports = function(app) {
  // Load index page

  app.get("/home", function(req, res) {
    res.send("this is the home route");
  });

  app.get("/movies/unwatched", function(req, res) {
    res.send("this is the unwatched route");
  });
  
  app.get("/movies/watched", function(req, res) {
    res.send("this is the watched route");


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
