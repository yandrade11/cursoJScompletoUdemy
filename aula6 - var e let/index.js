//formas de declarar variável

let nome = 'João'; //let é o jeito mais usado atualmente, varíavel local E não pode ser redeclarada
var name = 'João'; //var é o jeito mais antigo e pouco utilizado hoje em dia, variável global E quando é redeclerada é sobrescrita

//ou

let nome2; //declarei a variável (separei um espaço na memória mas ainda não defini um valor)
nome2 = 'Yuri'; //iniciei a variável (agora estou atribuindo valor ao espaço reservado na memória)

nome2 = 'YURI ANDRADE'
/*aqui estou dando outro valor à variável, como js é lido linha após linha, 
o primeiro valor deixa de existir e é trocado para esse novo valor*/

console.log(nome, 'nasceu em 84.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'se casou com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome2, 'se chama Eduardo.');

/* 
não podemos criar variáveis com palavras reservadas (nativas do js) exemplo:
let if;
let console;
let let;
*/

//variáveis precisam ter nomes significativos
//não podemos criar uma variável *começando* com numero, exemplo: let 1nome;
//não podemos criar variávels com espaço ou traço, exemplo: let nome-cliente;

console.log('\n--------------------- SEPARADOR ----------------------\n');

const verdadeiro = true;

let nome11 = 'Yuri';
let nome22 = 'Yuri';                        //VAR só tem escopo de função

if (verdadeiro) {                           //LET tem escopo de bloco {... bloco} ou seja, dentro do bloco do if ela pode ser declarada de novo (e não é a mesma variavel).
    let nome22 = 'Andrade';          

    if (verdadeiro) {
        let nome22 = 'Gomes de Andrade';    //Se não criar dentro do bloco ele pega a outra variavel de fora do bloco (não é a mesma), até chegar no escopo global 
        console.log(nome11, nome22);    
    }
}