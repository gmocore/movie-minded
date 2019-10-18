const OmdbApiClient = require('open-movie-database-api').OmdbApiClient;
const client = new OmdbApiClient('trilogy');

module.exports = client;
