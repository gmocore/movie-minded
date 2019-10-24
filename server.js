require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

// Handlebars
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main'
  })
);
app.set('view engine', 'handlebars');

// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);



  app.listen(PORT, function() {
    // eslint-disable-next-line no-console
    console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
    );
  });


module.exports = app;
