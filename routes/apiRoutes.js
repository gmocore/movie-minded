var movies = require("../models/movies");

const router = require('express').Router();

module.exports = function(app) {
  // Get all unwatched
  router.get("/movies/unwatched", function(req, res) {
    //
    movies.unwatched(result => {
      let handlebar = { movies: result };
      res.render("unwatched", handlebar);
    });
  });

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
