// IMPORTANTE: cada caracter de string é indexado, exemplo:

//               01234567
let umaString = "Um texto";

//para imprimir apenas um caracter do texto você pode:
console.log(umaString[4]);                  //imprime somente o E

//outra forma de imprimir apenas um caracter do texto:
console.log(umaString.charAt(4));

//para pegar o código referente a tabela ASCII:
console.log('código tabela ASCII:', umaString.charCodeAt(4));

//para saber em qual indice começa o texto que quero saber:
console.log(umaString.indexOf('texto'));    //se digitar o texto errado retorna -1 (null)

//para procurar na string o indice a partir de um ponto:
console.log('índice onde está a letra X, a partir da letra m[1]:', umaString.indexOf('x', 1));     //procura a letra X a partir do indice 1
//utilize .lastIndexOf para utilizar a busca de trás pra frente

