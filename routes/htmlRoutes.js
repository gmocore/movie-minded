var movies = require('../models/movies');

module.exports = function(app) {

  //get route to redirect to /home

  app.get('/', (req,res) => res.redirect('/home'));
  // route to render home page
  app.get('/home', function(req, res) {
    res.render('home');
  });

  // route to render unwatched movies
  app.get('/movies/unwatched', function(req, res) {
    
    movies.unwatched(data => {
      // object to pass in data to be rendered
      let hb = {
        movies: data
      };
      //render on deck page and database object
      res.render('ondeck', hb);
    });
  });
  
  // route to render unwatched movies

  app.get('/movies/watched', function(req, res) {

    movies.watched(data => {
      // object to pass in data to be rendered
      let hb = {
        movies: data
      };
      //render on deck page and database object      
      res.render('watched', hb);
    });
  });

  // Render 404 page for any unmatched routes
  app.get('*', function(req, res) {
    res.render('404');
  });
};
