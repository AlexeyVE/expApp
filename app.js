var express = require('express');

var app = express();

var routes = require('./routes');

var path=require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));

//Routes

//home
app.get('/', routes.home);

//movie_single
app.get('/star_wars_episode/:episode_number?',routes.movieSingle);

//notFound
app.get('*',routes.notFound);

app.listen(3000, function() {
    console.log('Server start at localhost:3000');
});