/*
    Aritméticos 
    +   adição / concatenação (união)
    -   subtração
    /   divisão
    *   multiplicação
    **  potenciação (elevado)
    %   resto da divisão
    ++  incremental de 1 em 1
    --  decremental de 1 em 1
*/

/*
    Precedência (em ordem) - ordem de cálculo numa expressão
    ()
    **
    * e /
    + e -
*/

//exemplos de incrementais / decrementais
let contador = 1;
console.log(contador++); //ele executa primeiro a função console.log e depois incrementa (resultado 1)

let contador2 = 1;
console.log(++contador2); //primeiro incrementa e depois executa a função console.log (resultado 2)

//recomenda-se fazer sempre desse jeito para o código ficar mais claro:
let contador3 = 1;
contador3++;
console.log(contador3);

//incremental / decremental de x em x (pode ser feito com qualquer operador aritmético)
let contador4 = 0;
const passo = 5;

contador4 = contador4 + passo;
console.log(contador4); 
// ou
contador4 += passo      //melhor escrita
console.log(contador4);


//conversão string to number
const num1 = 2;
const num2 = parseInt('10');
console.log(num1 + num2);

const num3 = parseInt('10.2');  //ele continua devolvendo 10 por ter usado parseINT e não parseFLOAT
const num3 = Number('10.4');    //Outra forma de conversão



