$(function(){

    $('body').append('<h1> Movies </h1>');
    var server = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';

    function search(movie_name) {
        $.ajax({
            url: server,
            dataType: 'jsonp',
            data: {
                q: movie_name,
                apiKey: 'qtghytkw8cn959m3cygbq3r9'
            },
            success: showMovies
        });

    }

   function showMovies(response){
        console.log('response', response);
        var movies =  response.movies;
        $('body').append('Found ' + movies.length);
        for (var i = 0; i < movies.length; i++){
            var movie = movies[i];
            $('body').append('<div class="title">' + movie.title + '</div>');
            $('body').append('<img src = "' + movie.posters.thumbnail + '"/>');
            $('body').append('<div class="year">Year: ' + movie.year + '</div>');
            $('body').append('<div class="rating">Rating: ' + movie.ratings.critics_rating + '</div>');
            //$('body').append('Movie Clip:' + movie.clip);
            $('body').append('<div class="synopsis">Synopsis: ' + movie.synopsis + '</div>');
            
            var casts = movie.abridged_cast;
            for (var j = 0; j < casts.length; j++){
                var cast = casts[j];
                $('body').append('<div class="cast">Cast: ' + cast.name + ' Character: ' + cast.characters);
            }
        }
    }

    $(document).ready(function() {
       $("#search").click(function () {
           var get = $("#txtbox").val();
           search(get);
        });
    });

});
