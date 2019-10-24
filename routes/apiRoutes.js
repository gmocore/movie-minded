/* eslint-disable no-console */
require('dotenv').config();
const movies = require('../models/movies');
const Movie = require('../models/Movie');
// movie trailer api
const movieTrailer = require('movie-trailer');
// express validator components
const { check, validationResult } = require('express-validator');

// OMDB api creds
const OmdbApiClient = require('open-movie-database-api').OmdbApiClient;
const client = new OmdbApiClient(process.env.OMDB_API_KEY);

module.exports = function(app) {
  // post route to update watched status of movie
  app.post('/movies/watched/:id', function(req, res) {

    movies.update(req.params.id, () => res.redirect('/movies/unwatched'));
  });
  // post route to add movie to unwatched
  app.post('/movies/unwatched', function(req, res) {

    movies.add(req.body.movie_title, () => res.redirect('/unwatched'));
  });

  // post route to add new movie
  app.post(
    '/test',
    // express validator checks if request is empty
    check('movie_title', 'enter a movie title')
      .not()
      .isEmpty(),
    function(req, res) {
      // validator error function
      const errors = validationResult(req);

      // if validator has error, return a 422 to the browser
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      } else {
        //if no errors, submit request
        client.getByTitle(req.body.movie_title)
          .then(result => {

          //construct movie object using imported constructor
          let movie = new Movie(
            result.Title,
            false,
            result.Poster,
            result.Plot,
            result.Actors,
            result.Year,
            result.Ratings[1] ? result.Ratings[1].Value : undefined
            )

            movies.add(
              movie.movieTitle,
              movie.poster,
              movie.summary,
              movie.actors,
              movie.releaseYear,
              movie.rtRating,
              () => res.json(movie)
            )
            // add constructed movie object and send to browser
              return Promise.resolve(result)
          })
          
          .catch(error => {
            console.log(error);
            return Promise.reject(error);
      });
    }
  });

  app.post('/movies/trailer',  function(req, res) {
    // post route to view movie trailer using api
     movieTrailer(req.body.title)
     .then(trailer => res.json(trailer))
     // eslint-disable-next-line no-console
     .catch(error => console.log(error));
  });

  // delete route to delete a movie from unwatched
  app.delete('/movies/unwatched/:id', (req, res) => {
    movies.delete(req.params.id, () => res.sendStatus(200));
  });

  // delete route to delete a movie from watched
  app.delete('/movies/watched/:id', (req, res) => {
    movies.delete(req.params.id, () => res.sendStatus(200));
  });
};
