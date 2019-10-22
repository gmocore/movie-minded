const orm = require('../config/orm');
    
// used in conjuntion with orm to update information stored in db

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

    delete: function(id, callback) {
        orm.deleteMovie('movies', id, movie => callback(movie));
    }
};

module.exports = movies;





