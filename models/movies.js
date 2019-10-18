const orm = require('../config/orm');

const movies = {
    watched: function(callback) {
        orm.allWatched('movies', movies => callback(movies));
    },

    unwatched: function(callback) {
        orm.allUnwatched('movies', movies => callback(movies));
    },

    add: function(movie_title, poster, summary, actors, release_year, rt_rating, callback) {
        orm.addUnwatched('movies', movie_title, poster, summary, actors, release_year, rt_rating, movie => callback(movie));
    },

    update: function(id, callback) {
        orm.updateWatched('movies', id, movie => callback(movie));
    },

    delete: function(callback) {
        orm.deleteMovie('movies', id, movie => callback(movie));
    }
}

module.exports = movies;





