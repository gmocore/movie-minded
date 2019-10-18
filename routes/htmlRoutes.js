var movies = require("../models/movies");

module.exports = function(app) {

  app.get('/', (req,res) => res.redirect('/home'));

  app.get("/home", function(req, res) {
    res.render("home");
  });

  app.get("/movies/unwatched", function(req, res) {
    movies.unwatched(data => {
      let hb = {
        movies: data
      }
      res.render("ondeck", hb);

    })
  });
  
  app.get("/movies/watched", function(req, res) {
    movies.watched(data => {
      let hb = {
        movies: data
      }
      res.render("watched", hb);

    })
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
