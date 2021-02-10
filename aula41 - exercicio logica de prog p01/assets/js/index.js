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
const max1 = (num1, num2) => {
    return num1 > num2 ? num1 : num2;
}

//melhor escrita com arrow function de uma linha (ele já entende que é um return então não deve colocar)
const max2 = (num1, num2) => num1 > num2 ? num1 : num2;

console.log('função simples: ', retornaMaior(num1, num2));
console.log('ternário simples: ', retornaMaior2(num1, num2));
console.log('arrow function simples: ', max1(10, 20));
console.log('arrow function de uma linha nao precisa de "return": ', max2(100, 200));