// var vs let vs const

// GLOBAL scope

/*
    doar variabilele declarate folosind keyword-ul VAR sunt hoisted
*/

// console.log(variabile);
var variabile = 20;

// console.log(variable2);
// let variable2 = 100;

// console.log(variable3);
// const variable3 = 200;

function someFunction() {
    console.log(userName);

    if (true) {
        var userName = 'Vladimir Putin';
        console.log(userName);
    }
}

// someFunction();

// redeclarare

var originalVariable = 'Some string';
console.log(originalVariable);

var originalVariable = 'Another string';
console.log(originalVariable);

let letVariable = 20;
console.log(letVariable);

// let letVariable = 40;
letVariable = 40;
console.log(letVariable);

// const arrays
const constVariable = [1, -2, -4, 100];
console.log(constVariable);

constVariable[1] = 20;
console.log(constVariable); // => FUNCTIONEAZA

const constObject = { firstName: 'Andrei', lastName: 'Popescu', age: 32 };
console.log(constObject);

constObject.age = 42;
console.log(constObject);

// constObject = { age: 42 }; => ERROR

// constVariable = [10, 20]; => ERROR
