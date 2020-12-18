// padrão de contas do JS = IEEE 754-2008

let num1 = 1500.23456;
let num2 = 25;

//para fazer a CONCATENAÇÃO ao invés da soma dos dois números, é necessário transformar UM DELES em string:
//desta forma o NUMBER está sendo convertido para STRING temporariamente!!!
console.log(num1.toString() + num2);

//para converter para STRING pra sempre:
/* num1 = num1.toString(); */

//para descobrir a REPRESENTAÇÃO BINÁRIA desse número:
console.log(num1.toString(2));

//para arredondar as casas decimais:
console.log(num1.toFixed(2));   //defina aqui a quantidade de casas decimais

//para descobrir se o numero é um INTEIRO:
console.log(Number.isInteger(num1));        //retorna um boolean de sim ou não
console.log(Number.isInteger(num2));

//para saber quando uma conta retornou NaN (Not a Number)
let temp = num1 * 'olá';
console.log(Number.isNaN(temp));



let num3 = 0.7;
let num4 = 0.1;

console.log(num3 + num4);   // IMPRECISÃO: em vez de retornar 0.8, ele retorna: 0.79999999...
                            // para resolver:
num3 += num4;               // num3 = num3 + num4 
num3 = parseFloat(num3);    // também poderia usar "Number" ao invés de "parseFloat"
console.log(`resultado é: ${num3.toFixed(2)}`);

//outra forma de resolver (não é a melhor forma):
num3 = ((num3 * 100) + (num4 * 100)) / 100;
console.log(`outra forma de resolver imprecisão: ${num3}`);     //vai retornar 0.9 por causa do código acima com +=

//no JS (em outras linguagens não) é permitido dividir por 0 e ele ainda retorna o tipo de dado INFINITY
console.log(100 / 0);   //não retorna erro, retorna true
