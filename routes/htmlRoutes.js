var movies = require("../models/movies");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index", {
        msg: "Welcome!"
      });
    
  });

  app.get("/watched", function(req, res) {
      res.render('watched')
  });

  // Load example page and pass in an example by id
  app.get("/movies/:id", function(req, res) {
    
      res.render("example");
 
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
