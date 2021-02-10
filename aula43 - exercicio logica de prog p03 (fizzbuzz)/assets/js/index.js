// escreva uma função que recebe um numero
// retorne o seguinte:
// numero é divisível por 3 = fizz
// numero é divisível por 5 = buzz
// numero é divisível por 3 e 5 = fizzbuzz
// numero NÃO é divisível por 3 e 5 = retorna numero
// checar se o numero é realmente um número
// use a função com números de 0 a 100


//com for e else if
function verificaNum1() {
    console.log('\n-------------------------------------\n');
    for (i = 0; i <= 100; i++) {

        if (!Number.isNaN(i)) {
            if (i % 3 == 0 && i % 5 == 0) {
                console.log(i, 'FizzBuzz');
            } else if (i % 3 == 0) {
                console.log(i, 'Fizz');
            } else if (i % 5 == 0) {
                console.log(i, 'Buzz');
            } else console.log(i, 'Não é divisível por nada');
        }
    }
}
verificaNum1();

//com ternário de else if
function verificaNum2() {
    console.log('\n-------------------------------------\n');

    for (i = 0; i <= 100; i++) {
        if (!Number.isNaN(i)) {
            i % 3 == 0 && i % 5 == 0 ? console.log(i, 'FizzBuzz') : (i % 3 == 0) ? console.log(i, 'Fizz') : i % 5 == 0 ? console.log(i, 'Buzz') : console.log(i);
        }
    }
}
verificaNum2();

console.log('\n-------------------------------------\n');
function verificaNum3(numero) {
    if (typeof numero === 'number') {
        if (numero % 3 == 0 && numero % 5 == 0) return 'FizzBuzz';
        if (numero % 3 == 0) return 'Fizz';
        if (numero % 5 == 0) return 'Buzz';
        return numero;
    }
    return numero = NaN;
}
console.log(`teste com letra: ${verificaNum3('abc')}`);
for (let i = 0; i <= 100; i++) {
    console.log(i, verificaNum3(i));
}