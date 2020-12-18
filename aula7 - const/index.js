const primeiroNumero = 5;
const segundoNumero = '10';

const resultado = primeiroNumero * segundoNumero;

const resultadoDuplicado = resultado * 2;
console.log(resultado);
console.log(resultadoDuplicado);

let resultadoQuadruplicado = resultadoDuplicado * 2;
console.log(resultadoQuadruplicado);

console.log( typeof primeiroNumero); //para descobrir (imprimir na tela) o tipo da variável/constante
console.log(typeof segundoNumero);

console.log(typeof primeiroNumero + segundoNumero); //ERRADO: resultado number10

//CERTO (2 casos)
console.log(typeof(primeiroNumero + segundoNumero)); //nesse caso o resultado da expressão inteira é uma string
console.log(typeof primeiroNumero + typeof segundoNumero); //nesse caso ele concatena string e number


//ATENÇÃO
console.log(primeiroNumero + segundoNumero); 
/*  quando você tem 2 *tipos* de dados diferentes (number + string)
    o + deixa de ser uma soma e vira uma concatenação (junção)
*/

