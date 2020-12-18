//Objetivo de se criar uma função: dar um valor pra ela e retornar outro valor
//como criar função:
function saudacao() {
    
}

/*--------------------------------*/

//como passar parâmetro:
function saudacao(nome) {
    //para retornar um valor para ser guardado na const "variavel"
    //obs ela pode retornar qualquer outra coisa que não seja o PARÂMETRO
    return `Bom dia ${nome}!`;
}

//obs: essa função pode ser reutilizada quantas vezes quiser
//aqui no "()" você envia o dado (valor) que vai ser guardando no parâmetro "nome"
saudacao('Yuri Andrade');
saudacao('Yuri Gomes');

//para salvar o retorno da função dentro de uma variável através de um ARGUMENTO
const variavel = saudacao('Yuri');
console.log(variavel);

/* FUNÇÃO NÍVEL BÁSICO */
           //(parâmetros)
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

//obs: as variaveis criadas dentro da função são locais (só funcionam dentro da função)
              //(argumentos)
console.log(soma(2,0));

/*--------------------------------*/

/* FUNÇÃO ANÔNIMA (NÍVEL MÉDIO) */
//neste caso é obrigado a utilizar ";"
const raizQuadrada = function(n) {
    return n ** 0.5;
};

console.log(raizQuadrada(9));

/*--------------------------------*/


/* FUNÇÃO ARROW FUNCTION (NÍVEL AVANÇADO) */
//modo tradicional
const raizQuadrada2 = (n) => {
    return n ** .5;
}
console.log(raizQuadrada2(16));

//quando eu possuo apenas 1 parâmetro e 1 linha de código eu posso fazer:
const raizQuadrada3 = n => n ** 0.5;    //nesse caso não funciona .5
console.log(raizQuadrada3(25));
