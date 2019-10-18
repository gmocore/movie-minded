var movies = require("../models/movies");
var movieTemplate = require("../models/omdb");
var omdb = require("omdb-client");

const OmdbApiClient = require('open-movie-database-api').OmdbApiClient;
const client = new OmdbApiClient('trilogy');


 function Movie(
  movieTitle,
  watched,
  summary,
  actors,
  releaseYear,
  rtRating
) {
  this.movieTitle = movieTitle;
  this.watched = watched;
  this.summary = summary;
  this.actors = actors;
  this.releaseYear = releaseYear;
  this.rtRating = rtRating;
  
};

module.exports = function(app) {
  app.post("/movies/watched/:id", function(req, res) {
    // res.render('watched')
    movies.update(req.params.id, (req, res) => res.redirect("/unwatched"));
  });

  app.post("/movies/unwatched", function(req, res) {
    // res.render('ondeck')
    movies.add(req.body.movie_title, () => res.redirect("/unwatched"));
  });

  app.post("/test", function(req, res) {
    // res.render('ondeck')
    console.log(req.body)
    client.getByTitle(req.body.movie_title).then(result => {
      console.log(result.Title)
      let movie = new Movie(
        result.Title,
        false,
        result.Plot,
        result.Actors,
        result.Year,
        result.Ratings[1].Value
      );
      console.log(movie);
      return res.send(movie)
    });
  });
};
