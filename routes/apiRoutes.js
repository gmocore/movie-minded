const movies = require("../models/movies");
const Movie = require('../models/Movie')

const OmdbApiClient = require("open-movie-database-api").OmdbApiClient;
const client = new OmdbApiClient(process.env.OMDB_API_KEY);


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
          result.Ratings[1] ? result.Ratings[1].Value : undefined
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
      });
    }
  });

  app.delete(`/movies/unwatched/:id`, (req, res) => {
    movies.delete(req.params.id, () => res.sendStatus(200));
  })

  app.delete(`/movies/watched/:id`, (req, res) => {
    movies.delete(req.params.id, () => res.sendStatus(200));
  })
};
