// // 'use strict';

// // // function sum(a,b){
// // //     let result = a + b;
// // //     console.log(result);
// // // }

// // // sum(11, 4);
// // // sum(22, 4);
// // // sum(32, 4);

// // // const logger = function(){
// // //     console.log('Hello')
// // // };

// // // logger();

// // // const calc = (a,b) => {
// // //     return a + b
// // // };

// // // const num = 12.2
// // // console.log(Math.round(num))

// // // const test = '12.2px';
// // // const data = parseInt(test)
// // // console.log(typeof data);

// // // function first(){
// // //  //do something
// // //  setTimeout(function(){
// // //     console.log(1);
// // //  }, 500)
// // // }

// // // function second(){
// // //     setTimeout(function(){
// // //         console.log(2);
// // //     }, 3000)
// // // }

// // // first();
// // // second();

// // // function learnJS(lang, callback){
// // //     console.log(`я учу: ${lang}`);
// // //     callback();
// // // }

// // // learnJS('JavaScript', gaming);

// // // function gaming(){
// // //     console.log('Game')
// // // }

// // //ПЕРЕБОР ОБЪЕКТА И РАЗБИТИЕ НА КЛЮЧЬ - ЗНАЧЕНИЕ

// // const options = {
// //     name: 'test',
// //     width: 1024,
// //     height: 1024,
// //     colors: {
// //         border: 'black',
// //         bg: 'red'
// //     },
// //     makeTest: function(){
// //         console.log('Test')
// //     }
// // }


// // for(let key in options){
// //     if(typeof (options[key]) === 'object'){
// //         for(let item in options[key]){
// //             console.log(`свойство: ${item}, имеет значение - ${options[key][item]}`);
// //         } 
// //     } else{console.log(`свойство: ${key}, имеет значение - ${options[key]}`)}
// // }

// // // УЗНАЕМ КОЛ_ВО СВОЙСТВ ВНУТРИ ОБЪЕКТА
// // console.log(Object.keys(options).length);

// // //Создание методов объекта

// // options.makeTest(); 

// // //деструктуризация объектов

// // const {border, bg} = options.colors
// // console.log(border)

// // //массивы и псевдомассивы

// // const arr = [10, 20, 30, 40, 50];

// // for(let i = 0; i < arr.length; i++){ //метод перебора массива
// //     console.log(arr[i]);
// // }

// // for (let value of arr){ //метод перебора массива
// //     console.log(value)
// // }

// // const array = [11, 32, 12, 45, 13, 43, 14, 55, 15]
// // array.sort(compareNum)
// // array.forEach(function(item, i, array){ //метод перебора массива
// //     console.log(`${i}: ${item} внутри массива ${array}`)
// // }) 

// // arr.pop(); //удаляет последний элемент массива

// // arr.push(10); //добавляет в конец массива элемент

// // // const str = prompt('','');
// // const product = str.split(', ');
// // product.sort();
// // console.log(product.join('; '));

// // function compareNum(a,b){
// //     return a - b;
// // }

// // let a = 5,
// //     b = a;
// // b = b+5;
// // console.log(b)
// // console.log(a)

// // const obj={
// //     a: 5,
// //     b: 1
// // };

// // // const copy = obj; //ссылка на объект

// // // copy.a = 10;

// // // console.log(copy);
// // // console.log(obj);

// // function copy(mainObj){
// //     let objCopy={};
// //     let key;
// //     for(key in mainObj){
// //         objCopy[key]= mainObj[key];
// //     }
// //     return objCopy;
// // }

// // const numbers = {
// //     a: 2,
// //     b: 3,
// //     c: {
// //         x: 3,
// //         y: 5
// //     }
// // }

// // // const newNumbers = copy(numbers);
// // // newNumbers.a = 32;
// // // newNumbers.c.x = 22;
// // // console.log(numbers)
// // // console.log(newNumbers)

// // const add = {
// //     d: 17,
// //     e: 20
// // };

// // const clone = Object.assign({}, add)
// // clone.d = 25;
// // console.log(add);
// // console.log(clone);

// // const oldArray = ['a', 'b', 'c']

// // const newArray = oldArray.slice();

// // newArray[1] = 'adfswsv';
// // console.log(newArray);

// // console.log(oldArray);

// // const video = ['youtube', 'vimeo', 'rutube'],
// //       blogs = ['wordpress', 'livejournal', 'blogger'],
// //       internet = [...video, ...blogs, 'vk', 'fb'];

// //       console.log(internet)

// // function log(a, b, c){
// //     console.log(a);
// //     console.log(b);
// //     console.log(c);
// // }

// // const num = [2, 5, 7];

// // log(...num);

// // const arraay = ['a', 'b'];

// // const newArraay = [...arraay];

// // console.log(newArraay);

// // const q = {
// //     one: 1,
// //     two: 2
// // };

// // const copyQ = {...q};

// // copyQ.one = 43;
// // console.log(copyQ);
// // console.log(q)

// // //Прототипно-ориентированное программирование

// // const soldier = {
// //     health: 400,
// //     armor: 100,
// //     sayHello: function(){
// //         console.log('Hello')
// //     }
// // };

// // const john = {
// //     health: 100
// // };

// //  //наследование от основного объекта свойств

// // Object.setPrototypeOf(john, soldier);

// // john.sayHello();

// function hello(){
//     console.log('Hello world');
// }

// hello();

// function hi(){
//     console.log('say,hello');
// }

// hi();

// const arr = [1,14, 4, 30, 54],
//       sort = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }

// console.log(sort)

function start(){
   let loggin = prompt('Кто там?','');
   if(loggin == 'Админ'){
    let adminPass = prompt('Введите пароль!','');
    if(adminPass == 'Я главный'){
        alert('Здравствуйте');
    }else if (adminPass != 'Я главный'){
        alert('не верный пароль!')
    } else{
        alert('отменено')
    }
   }else if(loggin == null){
    alert('отменено')
   }else{
    alert('я вас не знаю')
   }
}


// for( let i = 0; i<1; i++){
//     let number = +prompt('введите число больше 100!','');
//     if(number < 100 && number != 0){
//         console.log('мало');
//         console.log(number)
//         i--
//     }else {break}
// }

alert( +"Infinity" )

