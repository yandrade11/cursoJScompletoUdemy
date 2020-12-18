/*
Tipos de dados primitivos: String, Number, Boolean, Undefined, Null, BigInt, Symbol
São valores imutáveis: Não podemos modificar nada neles, apenas SUBSTITUIR o valor.
*/

//explicando: 
let a = 'A';
let b = a;              //isso é uma cópia

let c = 'Coisa';
c = 'Outra Coisa';      //isso é SUBSTITUIR o valor e não MODIFICAR
console.log(c);

/*------------------------------------------------------------------------------------*/

/*
Tipos de dados por referência: Array, Object, Function
São valores mutáveis
*/

//explicando:
let a2 = [1,2,3];
let b2 = a2;            //isso NÃO é uma cópia, estou passando por referência...          
console.log(a2, b2);

//...ou seja, se eu alterar a2 ou b2 (tanto faz) eu altero o valor das duas variáveis de uma vez
a2.push(4);
console.log(a2, b2);
b2.pop();
console.log(a2, b2);

//caso você queira COPIAR o valor de 'a' para 'b' dentro de um dado de array (mutável):
a2.push(4);
let c2 = [...a2];
console.log(c2);

/*------------------------------------------------------------------------------------*/

//exemplos em objeto
const x = {
    nome: 'Yuri',
    sobrenome: 'Andrade'
};
const y = x;
y.nome = 'João';        //Valor por referência, não é cópia.
console.log(x, y);

//para fazer CÓPIA
const x2 = {
    nome: 'Yuri',
    sobrenome: 'Andrade'
};
const y2 = {...x2};
y2.nome = 'João'; 
console.log(x2, y2);