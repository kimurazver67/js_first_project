"use strict";

let numberOfFilms;

function start(){
   numberOfFilms = +prompt('сколько фильмов уже посмотрел?', '');
   while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('сколько фильмов уже посмотрел?', '');
   }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false,
}


function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB)
    }
}
showMyDB(personalMovieDB.private);



function rememberMyFilms(){
    for (let i = 0; i<2; i++){
        const question_1 = prompt('один из последних просмотренных фильмов?', ''),
             question_2 = prompt('На сколько оцените его?', '');
         if(question_1 != null && question_2 != null && question_1 != '' && question_2 != '' && question_1.length<50){
          personalMovieDB.movies[question_1]=question_2;
             console.log('done!')
             
         } else{
             console.log('Error!')
             i--;
         }
     }
}

rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log('просмотрено довольно мало фильмов!')
    } else if(10<personalMovieDB.count<30){
        console.log('вы классический зритель!');
    } else if(30<personalMovieDB.count){
        console.log("Вы киноман!!!")
    } else{
        console.log('ERRor!')
    }
}

detectPersonalLevel();

function writeYouGeneres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`,'');
    }
}
writeYouGeneres();
