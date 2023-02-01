"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}


for (let i = 0; i<2 ; i++){
    const filmName = prompt('какой фильм ты смотрел последним?',''),
    range = +prompt('Как ты его оценишь?','');
    if(filmName != null && range != null && filmName != "" && range != "" &&filmName.length < 50){
        personalMovieDB.movies[filmName] = range;
        console.log('done')
    } else{
        console.log('error');
        i--;
    }
}

if(personalMovieDB.count<10){
    console.log('So small kinoman')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Classic')
}else if(personalMovieDB.count >=30){
    console.log('kinoman')
} else{
    console.log('Error')
}
console.log(personalMovieDB)