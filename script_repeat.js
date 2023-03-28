'use strict'

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function(){
    personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели?', '');

  while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
    personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели?', '');
  }
  },
  rememberMyFilms: function(){
    for(let i = 0; i<2; i++ ){
      const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');
      
      if (a != null && a!='' && a.length < 50 && b != null && b.length < 50 && b!=''){
        personalMovieDB.movies[a]=b;
        console.log('Done')
      } else {
        console.log('Error')
        i--
      }
    }
  },
  detectPersonalLevel: function(){
    if(personalMovieDB.count < 10){
      console.log('просмотрено слишком мало фильмов')
    } else if(10< personalMovieDB.count < 30){
      console.log('Вы классический зритель')
    }else if(30<personalMovieDB.count){
      console.log('КИНОМАН')
    }else {
      console.log('Error')
    }
  },
  writeYouGeneres: function(){
    for(let i = 1; i <= 3; i++){
      const answer = prompt(`ваш любимый жанр под номером ${i}?`, '');
      if(answer != '' && answer != null ){
        personalMovieDB.genres.push(answer);
      } else{
        console.log('Error')
        i--
      }
    };
    personalMovieDB.genres.forEach(function(item, i){
      console.log(`Любимый жанр ${i+1} - это ${item}`)
    });
  },
  toggleVisibleMyDB: function(){
    if(personalMovieDB.privat === false){
      Object.defineProperty(personalMovieDB, 'privat', {value: true})
    } else{
      Object.defineProperty(personalMovieDB, 'privat', {value: false})
    }

  },
  showMyDB: function(){
    if(personalMovieDB.privat != false){
      console.log('Private')
    }else{
      console.log(personalMovieDB)
    }
  }
}
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYouGeneres();



