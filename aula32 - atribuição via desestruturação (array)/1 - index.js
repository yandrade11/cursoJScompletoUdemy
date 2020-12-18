let = 'A';      //B
let = 'B';      //C
let = 'C';      //A

//desestruruo as variaves transformando em array e atribuo novos valores (1, 2 e 3) às variaveis
[a, b, c] = [1, 2, 3];

//OU
const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

//----------------------------------------------------------------------------------------------------//

    //indices =  0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var primeiroValor = numeros[0];     //estou utilizando VAR aqui e la embaixo pq estou REdeclarando a variavel (a nivel de estudo)

console.log(primeiroValor);

//----------------------------------------------------------------------------------------------------//

//MAIS EXEMPLO DE ATRIBUIÇÃO VIA DESESTRUTURAÇÃO

      //indices =  0  1  2  3  4  5  6  7  8
//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var [primeiroValor, segundoValor] = numeros;
console.log(primeiroValor, segundoValor);

//COMO PEGAR O RESTO DO ARRAY (o que não )
var [primeiroValor, segundoValor, ...resto] = numeros;      
console.log(resto);

//----------------------------------------------------------------------------------------------------//

//PEGANDO DE DOIS EM DOIS OS VALORES DO ARRAY (OU NO INTERVALO QUE QUISER)

const [um, , três, , cinco] = numeros;
console.log(um, três, cinco);

/*
    ... quando usado no sentido de pegar o resto do array = rest operator
    ... quando usado no sentido de espalhar/distribuir = spread operator
*/

