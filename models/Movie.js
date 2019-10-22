// constructor to be used in apiRoutes

function Movie(
    movieTitle,
    watched,
    poster,
    summary,
    actors,
    releaseYear,
    rtRating = 'NA'
  ) {
    this.movieTitle = movieTitle;
    this.watched = watched;
    this.poster = poster;
    this.summary = summary;
    this.actors = actors;
    this.releaseYear = releaseYear;
    this.rtRating = rtRating;
  }
  
module.exports = Movie;  