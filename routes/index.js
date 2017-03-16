var moviesJSON = require('../movies.json');
var movies = moviesJSON.movies;

//home
exports.home = function(req, res) {
    res.render('home', {
        title: 'Star wars movies page',
        movies: movies
    });
};

//movie_single
exports.movieSingle = function(req, res) {
    var episode_number = req.params.episode_number;
    if (episode_number >= 1 && episode_number <= 6) {
        var movie = movies[episode_number - 1];
        var title = movie.title;
        var main_characters = movie.main_characters;
        res.render('movie_single', {
            movies: movies,
            movie: movie,
            main_characters: main_characters,
            title: title
        })
    } else {
        res.render('notFound', {
            movies: movies,
            title: "Page not found"
        });
    }
};

//notFound
exports.notFound = function(req, res) {
    res.render('notFound', {
            movies: movies,
            title: "Page not found"
    });
};