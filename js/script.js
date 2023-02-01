"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

const filmName = prompt('какой фильм ты смотрел последним?',''),
      range = +prompt('Как ты его оценишь?',''),
      filmName2 = prompt('какой фильм ты смотрел последним?',''),
      range2 = +prompt('Как ты его оценишь?','');

personalMovieDB.movies[filmName] = range;
personalMovieDB.movies[filmName2] = range2;

console.log(personalMovieDB)