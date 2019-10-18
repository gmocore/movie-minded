const connection = require("../config/connection");

const orm = {
  allWatched: function(table, callback) {
    let queryString = "SELECT * FROM ?? WHERE ?";

    connection.query(queryString, [table, { watched: true }], (err, result) => {
      if (err) throw err;

      callback(result);
    });
  },

  allUnwatched: function(table, callback) {
    let queryString = "SELECT * FROM ?? WHERE ?";

    connection.query(
      queryString,
      [table, { watched: false }],
      (err, result) => {
        if (err) throw err;

        callback(result);
      }
    );
  },

  addUnwatched: function(table, movie_title, poster, summary, actors, release_year, rt_rating, callback) {
    let queryString = "INSERT INTO ?? SET ?";

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
  updateWatched: function(table, id, callback) {
    let queryString = "UPDATE ?? SET ? WHERE id = ?";

    connection.query(
      queryString,
      [table, { watched: true }, id],
      (err, result) => {
        if (err) throw err;

        callback(result);
      }
    );
  },

  deleteMovie: function(table, id, callback) {
    let queryString = "DELETE FROM ?? WHERE id = ?";

    connection.query(queryString, [table, id], (err, result) => {
      if (err) throw err;

      callback(result);
    });
  }
};

module.exports = orm;
