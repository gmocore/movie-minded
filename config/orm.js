var connection = require("../config/connection.js");

var orm = {
  viewUnwatched: function(tableName, watched, callback) {
    var queryString = "SELECT * FROM ?? WHERE ? = false";
    connection.query(queryString, [tableName, watched], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  viewWatched: function(tableName, watched, callback) {
    var queryString = "SELECT * FROM ?? WHERE ? = true";
    connection.query(queryString, [tableName, watched], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  newUnwatched: function(tableName, columnName, columnValue, callback) {
    let queryString = "INSERT INTO ?? (?) VALUES(?);";
    connection.query(
      queryString,
      [tableName, columnName, columnValue],
      function(err, result) {
        if (err) throw err;
        callback(result);
      }
    );
  },
  updateWatched: function(tableName, watchedCol, watchedBoolean, id, callback) {
    let queryString = "UPDATE ?? SET ? = ? WHERE id = ?";
    connection.query(
      queryString,
      [tableName, watchedCol, watchedBoolean, id],
      function(err, result) {
        if (err) throw err;
        callback(result);
      }
    );
  },
  delete: function(tableName, id, callback) {
    let queryString = "DELETE FROM ?? WHERE id = ?";
    connection.query(queryString, [tableName, id], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  }
};

module.exports = orm;
