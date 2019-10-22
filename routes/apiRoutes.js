const movies = require('../models/movies');
const Movie = require('../models/Movie');
const movieTrailer = require('movie-trailer');
const { check, validationResult } = require('express-validator');

const OmdbApiClient = require('open-movie-database-api').OmdbApiClient;
const client = new OmdbApiClient(process.env.OMDB_API_KEY);

module.exports = function(app) {
  app.post('/movies/watched/:id', function(req, res) {
    // res.render('watched')
    console.log(req.params.id);
    movies.update(req.params.id, result => res.redirect('/movies/unwatched'));
  });

  app.post('/movies/unwatched', function(req, res) {
    // res.render('ondeck')
    movies.add(req.body.movie_title, () => res.redirect('/unwatched'));
  });

  app.post(
    '/test',

    check('movie_title', 'enter a movie title')
      .not()
      .isEmpty(),
    function(req, res) {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      } else {
        client.getByTitle(req.body.movie_title).then(result => {
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
            () => res.json(movie)
          );
        });
      }
    }
  );

  app.post('/movies/trailer',  function(req, res) {
    // res.render('ondeck')
     // eslint-disable-next-line no-console
     movieTrailer(req.body.title)
     .then(trailer => res.json(trailer))
     .catch(error => console.log(error));
  });

  app.delete('/movies/unwatched/:id', (req, res) => {
    movies.delete(req.params.id, () => res.sendStatus(200));
  });

  app.delete('/movies/watched/:id', (req, res) => {
    movies.delete(req.params.id, () => res.sendStatus(200));
  });
};
