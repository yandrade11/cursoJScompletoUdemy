//CONTINUE e BREAK funcionam para for, for in, for of, while e do while... talvez switch case também

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numeros) {

    //CONTINUE = quando encontrar num = 2, continua pra próxima iteração, ou seja, pula pra próxima
    //colocar o método continue ANTES do código que vai ser executado no for of
    if (num === 2 || num === 5) {
        console.log(`pulei o numero: ${num}`);
        continue;
    }

    console.log(num);
}

console.log('\n-------------------------------\n');

//BREAK = quando encontrar a letra = 'c' ele para o código e não executa mais nada (melhora performance)
const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
for (let l of letras) {
    if (l === 'c') {
        console.log('parei a execução no C');
        break;
    }
    console.log(l);
}
