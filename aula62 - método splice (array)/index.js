//o método splice mexe diretamente no array original

//               -5      -4       -3       -2       -1
//                0       1        2        3        4
const nomes = ["yuri", "enzo", "creuza", "yoman", "aline"];

//OBS: Number.MAX_VALUE = maior numero aceito pelo javascript (quase infinito), pode ser usado pra remover do indice X até o final ex:
//nomes.splice(2, Number.MAX_VALUE)
//resultado ["yuri", "enzo", "creuza"] ou seja, removeu do indice que coloquei em diante, não incluindo o próprio indice 2

//SINTAXE
//nomes.splice(INDICE, QUANTOS ELEMENTOS QUERO REMOVER DO ARRAY, ELEM PRA ADD 1, ELEM PRA ADD 2, ELEM PRA ADD 3);

//.pop()
let removidos = nomes.splice(-1, 1); /* ou nomes.splice(-1, 1) */
console.log(nomes, `removidos: ${removidos}`);

//.push() utilizar splice somente quando for adicionar mais de 1 valor
removidos = nomes.splice(nomes.length, 0, "aline");
console.log(nomes, `removidos: ${removidos}`);

//removendo 2 valores (pode remover varios)
removidos = nomes.splice(3, 2); /* ou nomes.splice(-2, 2) */
console.log(nomes, `removidos: ${removidos}`);

//adicionando 2 valores (pode adicionar varios)
removidos = nomes.splice(nomes.length, 0, "yoman", "aline");
console.log(nomes, `removidos: ${removidos}`);

//substituindo indice existente e empurrando próximos valores para a direita (neste caso 'yoman' passa a ser o indice 4)
removidos = nomes.splice(3, 0, "yoman bittencourt");
console.log(nomes, `removidos: ${removidos}`);

//substituindo valor
nomes.splice(3, 1); //só para voltar ao array inicial, ignora.
removidos = nomes.splice(3, 1, "yoman substituido");
console.log(nomes, `removidos: ${removidos}`);

//.shift()
removidos = nomes.splice(0, 1)
console.log(nomes, `removidos: ${removidos}`);

//unshift()
nomes.splice(0, 0, 'yuri'); //só para voltar ao array inicial, ignora.
removidos = nomes.splice(0, 0, 'yuri substituido')
console.log(nomes, `removidos: ${removidos}`);