//escreva uma função que recebe 2 numeros e retorne o maior deles

let num1 = 5;
let num2 = 7;

//função simples
function retornaMaior(um, dois) {
    if (um > dois) return um + 10;
    else return dois + 10;
}

//ternário simples
function retornaMaior2(um, dois) {
    return um > dois ? um : dois;
}

//arrow function
const manum1 = (num1, num2) => {
    return num1 > num2 ? num1 : num2;
}

//melhor escrita com arrow function de uma linha (ele já entende que é um return então não deve colocar)
const manum12 = (num1, num2) => num1 > num2 ? num1 : num2;

console.log('função simples: ', retornaMaior(num1, num2));
console.log('ternário simples: ', retornaMaior2(num1, num2));
console.log('arrow function simples: ', manum1(10, 20));
console.log('arrow function de uma linha nao precisa de "return": ', manum12(100, 200));