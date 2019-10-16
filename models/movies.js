const orm = require('../config/orm');

const movies = {
    watched: function(callback){
        orm.viewWatched('movies', 'watched', result => callback(result));
    },
    unwatched: function(callback){
        orm.viewUnwatched('movies', 'watched', result => callback(result));
    },
    new: function (movieName, movieNameValue, callback) {
        orm.newUnwatched('movies', movieName, movieNameValue, result => callback(result));
    },
    delete: function(id, callback) {
        orm.delete('movies', id, result => callback(result));
    }, 
    updateWatched: function(callback) {
        orm.updateWatched('movies', 'watched', true, id, result => callback(result))
    }
}

module.exports = movies;