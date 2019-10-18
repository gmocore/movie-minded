var movies = require("../models/movies");
var movieTemplate = require("../models/omdb");
var omdb = require("omdb-client");

const OmdbApiClient = require("open-movie-database-api").OmdbApiClient;
const client = new OmdbApiClient("trilogy");

function Movie(
  movieTitle,
  watched,
  poster,
  summary,
  actors,
  releaseYear,
  rtRating = 'NA'
) {
  this.movieTitle = movieTitle;
  this.watched = watched;
  this.poster = poster;
  this.summary = summary;
  this.actors = actors;
  this.releaseYear = releaseYear;
  this.rtRating = rtRating;
}

module.exports = function(app) {
  app.post("/movies/watched/:id", function(req, res) {
    // res.render('watched')
    console.log(req.params.id)
    movies.update(req.params.id, (result) => res.redirect('/movies/unwatched'));
  });

  app.post("/movies/unwatched", function(req, res) {
    // res.render('ondeck')
    movies.add(req.body.movie_title, () => res.redirect("/unwatched"));
  });

  app.post("/test", function(req, res) {
    // res.render('ondeck')
    console.log(req.body);
    if (req.body) {
      client.getByTitle(req.body.movie_title).then(result => {
        console.log(result.Title);
        let movie = new Movie(
          result.Title,
          false,
          result.Poster,
          result.Plot,
          result.Actors,
          result.Year,
          result.Ratings[1].Value
        );
        movies.add(
          movie.movieTitle,
          movie.poster,
          movie.summary,
          movie.actors,
          movie.releaseYear,
          movie.rtRating,
          () => res.sendStatus(200)
        );
        // return res.send(movie)
      });
    }
  });

  app.delete(`/movies/unwatched/:id`, (req, res) => {
    movies.delete(req.params.id, () => res.sendStatus(200));
  })
};
