//VETOR = array de 1 dimensão (não tem array dentro de array)
const frutas = [
    'Maçã',
    'Pêra',
    'Uva'
];

//FOR IN: funciona da mesma forma que um for tradicional com array/objetc.length (melhor escrita, menos verboso)
for (const indice in frutas) {
    console.log(indice);                 //devolve iteração (posição) do array
    console.log(frutas[indice]);         //devolve valor de cada iteração
    console.log(frutas);                 //devolve todos os valores do array
    console.log('-----------------------------');
}

const pessoa = {
    nome: 'Yuri',
    sobrenome: 'Andrade',
    idade: '29'
};

for (const chave in pessoa) {
    console.log(chave);                  //devolve nome de cada chave do object
    console.log(pessoa[chave]);          //devolve valor de cada chave do object
}

console.log('-----------------------------');

//OUTRAS FORMAS DE IMPRESSÃO:
console.log(pessoa.nome);                //tradicional
console.log(pessoa['sobrenome']);        //nova forma
