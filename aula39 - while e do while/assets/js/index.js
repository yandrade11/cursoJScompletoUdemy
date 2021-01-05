//indice precisa ser declarado fora do escopo
let indice = 0;

while (indice <= 10) {
    console.log(indice);
    indice++;
}

console.log('\n-------------------------------\n');

const nome = 'Yuri';
let i = 0;
while (i < nome.length) {
    console.log(nome[i]);
    i++;
}

console.log('\n-------------------------------\n');

//função disponível no MDN para gerar numero aleatorios
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

//while só vai parar quando finalmente gerar o número (de forma aleatória) 10
//while checa a condição ANTES de fazer o código
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('\n-------------------------------\n');

//do while faz o código primeiro e DEPOIS checa a condição
//do while SEMPRE executa pelo menos 1x antes de checar a condição
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 49);