// 'use strict'

// // let summa = +prompt("ввеіть суму")
// // let part = +prompt();
// // let partsumm = math.floor(summa / part);




// // let username = prompt(' Як вас зовуть?')

// // for (let i = 1; i <= 5; i++){

// //     console.log( i + username);
    

// // }

// // 



// // let num1 = +prompt('Введіть перше число!');

// // let num2 = +prompt('Введіть друге число!');

// // let num3 = +prompt('Введіть третє число!');

// // let rez 

// // if (num1 + num2 > num3 && num2 + num3 > num1 && num3 + num1 > num2) { rez = 'правильно'
    
// // }
// // else{rez = 'не правильно'}

// // console.log(rez);

// // ///////////////////////////

// // let c = 56.67;

// // alert(parseInt(c))

// let c = 'фівфів56.67';

// if (isString(c)) {console.log('значення змінної є рядком!');
    
// }
// console.log(typeof c);


// let c = Infinity;

// console.log(isFinite(c));

// function test() {
//     console.log(`hello . I'm gerat function`);// function declaration =)
// }

// test();

// const test2 = function(){alert(`hello`)}

// test2(); // function expreshen

// const test3 = () => {console.log("YO");}

// test3(); // стрілочна функція 

// const square = function (w = 1, h = 1, z = 1){
//     // if(!w) {w = 0};
//     // if(!h) {h = 0};

//     return w * h * z;
// }

// let a = +prompt('Введіть ширину  прямокутника');

// let b = +prompt('Введіть довготу прямокутника');

// let z = +prompt('number');

// let rez = square(a, b, z);

// console.log(`Площа трикутника ${rez} кв.см` );

// const cart = function() {



// let countProduct = +prompt('Введіть кількість ');

// const baseCount = function(n) {
// if (n>=20) {
//     return n % 10;
// }
// else{
//     return n;
// }
// }

// // if (countProduct >= 20 ) {
// // c = countProduct % 10;
// // }

// // else{c = countProduct}

// const generationWord = function(c) {
//     let s = baseCount(c);
//     if (s == 1) {
//         return  'товар';
//         } else if(
//             s >= 2 && s <= 4) {
//                 return  'товари';
//             } else{
//                 return  'товарів';
//             }
// }

// // if (c == 1) {
// // rez = 'товар';
// // } else if(
// //     c >= 2 && c <= 4) {
// //         rez = 'товари';
// //     } else{
// //         rez = 'товарів';
// //     };

//     alert(`В кошику ${countProduct} ${generationWord(countProduct)} `);
// }

// cart();

// const cart2 = function() {

// const plosh = function(w = 1, h = 2) {
//     return w * h /2
// };

// let a = +prompt('Перше число ');
// let b = +prompt('Друге число');
// let s = plosh(a, b);

// console.log(`Площа треугольника ${s} см`);
// }

// cart2();


const cart3 = function() {

    let a = +prompt('Перше число ');

    let rez = 1 ;

while (rez <= 10) {
    console.log(` ${a} * ${rez} = ${a * rez}`);
    rez++;
}
  
}

 cart3();

