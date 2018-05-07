// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array) {
  return array.map(function(movie){
    var newMovie = Object.assign({},movie);
    var split = newMovie.duration.split(' ');
    var hours;
    var minutes;
    if (split.length > 1){
      hours = Number(split[0].replace('h', ''));
      minutes = Number(split[1].replace('min', ''));
    } else {
      if (split[0].indexOf('h') > -1) {
        hours = Number(split[0].replace('h', ''));
        minutes = 0;
      } else {
        hours = 0;
        minutes = Number(split[0].replace('min', ''));
      }
    }
  newMovie.duration = hours*60 + minutes;
  return newMovie;
  });
}


// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
  return movies.reduce(function(rate, movie, index, movies){
    if (index === movies.length - 1) {
      var a = (rate + Number(movie.rate)) / movies.length;
      var b = Math.round(a*100);
      return b / 100;
    } else {
      return rate + Number(movie.rate);
    }
  }, 0)
}


// Get the average of Drama Movies

function dramaMoviesRate (array){
  var dramaAvg = 0;
  for (i = 0 ; i < array.length ; i++){
    if (array[i].genre.indexOf('Drama') > -1 ){ 
      var dramaMovies = array.filter(function(movie){
        return movie.genre.indexOf('Drama') > -1;
        })
      dramaAvg = dramaMovies.reduce(function(rate, movie, index, dramaMovies){
        if (index === dramaMovies.length - 1) {
        var a = (rate + Number(movie.rate)) / dramaMovies.length;
        var b = Math.round(a*100);
        return b / 100;
        } else {
          return rate + Number(movie.rate);
        }
      }, 0)
      return dramaAvg;
    } else {
      dramaAvg = undefined;
    } 
  } 
  return dramaAvg;
}
dramaMoviesRate(movies);


// Order by time duration, in growing order

function orderByDuration(array) {
  return array.sort(function(movie1, movie2){
    if (movie1.duration === movie2.duration) {
     return  movie1.title < movie2.title ? -1 : 1;
    }
    return movie1.duration - movie2.duration;
  });
}
var minutedMovies = turnHoursToMinutes(movies);
orderByDuration(minutedMovies);

// Iteration 5: Steven Spielberg. The best? How many movies did STEVEN SPIELBERG

function howManyMovies(array) {
  if (array.length === 0) return undefined;
  var stevenMovies = array.filter(function(movie){
    return (movie.director === 'Steven Spielberg') && (movie.genre.indexOf('Drama') > -1);
  });
  return "Steven Spielberg directed " + stevenMovies.length + " drama movies!";
}

howManyMovies(movies);



// Order by title and print the first 20 titles


// Best yearly rate average
