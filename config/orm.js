const connection = require('../config/connection');

//methods to query mysql
const orm = {
  // get all watched movies
  allWatched: function(table, callback) {
    let queryString = 'SELECT * FROM ?? WHERE ?';

    connection.query(queryString, [table, { watched: true }], (err, result) => {
      if (err) throw err;

      callback(result);
    });
  },
  // get all unwatched movies
  allUnwatched: function(table, callback) {
    let queryString = 'SELECT * FROM ?? WHERE ?';

    connection.query(
      queryString,
      [table, { watched: false }],
      (err, result) => {
        if (err) throw err;

        callback(result);
      }
    );
  },

  // add new movie to unwatched, and store data from api
  addUnwatched: function(table, movie_title, poster, summary, actors, release_year, rt_rating, callback) {
    let queryString = 'INSERT INTO ?? SET ?';

    connection.query(
      queryString,
      [table, { 
        movie_title: movie_title, 
        poster: poster,
        summary: summary,  
        actors: actors,
        release_year: release_year,
        rt_rating: rt_rating

      }],
      (err, result) => {
        if (err) throw err;
         
        callback(result);
      }
    );
  },
  // update watched status of movie
  updateWatched: function(table, id, callback) {
    let queryString = 'UPDATE ?? SET ? WHERE id = ?';

    connection.query(
      queryString,
      [table, { watched: true }, id],
      (err, result) => {
        if (err) throw err;

        callback(result);
      }
    );
  },

  // delete movie from db
  deleteMovie: function(table, id, callback) {
    let queryString = 'DELETE FROM ?? WHERE id = ?';

    connection.query(queryString, [table, id], (err, result) => {
      if (err) throw err;

      callback(result);
    });
  }
};

//export to use with models
module.exports = orm;
