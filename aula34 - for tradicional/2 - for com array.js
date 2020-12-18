//                 0      1       2
const frutas = ['Maçã', 'Pêra', 'Uva'];
console.log(frutas.length);             //lembrando aula de strings o .length conta a quantidade de posicoes que tem no array

console.log('------------');

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice: ${i} - ${frutas[i]}`);
}

//OBS: FOR TRADICIONAL NÃO FUNCIONA COM OBJETO POIS OBJETO NÃO É ITERÁVEL (NÃO TEM ÍNDICE)