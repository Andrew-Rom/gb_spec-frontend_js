"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

function raiseIntoCube(num) {
    return num ** 3;
}

console.log(raiseIntoCube(2));
console.log(raiseIntoCube(3));
console.log(raiseIntoCube(-5));
