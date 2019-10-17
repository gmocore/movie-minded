

module.exports = 
function Movie(movieTitle, watched, summary, actors, releaseYear, rtRating, userRating){
    this.movieTitle = movieTitle;
    this.watched = watched;
    this.summary = summary;
    this.actors = actors;
    this.releaseYear = releaseYear;
    this.rtRating = rtRating;
    this.userRating = userRating;
}
