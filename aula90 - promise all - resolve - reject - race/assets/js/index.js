function random(min, max) {
    //passando segundo (argumento na chamada da função) para milissegundos
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    //resolve: código executado com sucesso então resolve
    //reject: deu erro, então rejeita o código e da a mensagem
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject(new Error('Entrada de dados da mensagem inválida'));
                return;
            };

            resolve(msg.toUpperCase() + ' - Passei na promise');   //resolve só pode ter 1 parâmetro
        }, tempo)
    });
}

const promises = [
    'Primeiro Valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    // esperaAi(1000, 1000),
    'outro valor'
];

const promises2 = [
    esperaAi('Promise 1', random(1, 5)),
    esperaAi('Promise 2', random(1, 5)),
    esperaAi('Promise 3', random(1, 5)),
    // esperaAi(1000, random(1, 5)),
];

// Promisse.all roda mais de uma promise e devolve em ordem, não importa o tempo de execução de cada promise

// Promise.all(promises).then(valor => {
//     console.log(valor);
// }).catch(erro => {
//     console.log(erro);
// })


// Promisse.race devolve o que executar PRIMEIRO no array, inclusive se NÃO for uma promise
// OBS Importante: apesar de só entregar o valor da primeira, ele continua rodando as outras promises (performance ruim)

// Promise.race(promises2).then(valor => {
//     console.log(valor);
// }).catch(erro => {
//     console.log(erro);  //mesmo que uma das promises tenham erro, ele vai retornar a PRIMEIRA que terminar de executar
// })


function baixaPagina() {
    const emCache = false;  //suposição

    if (emCache) {
        //já te devolve a promise resolvida em caso de sucesso ou erro (else) caindo no .then()
        return Promise.resolve('Página em cache.');

        //reject cai direto no .catch()
        // return Promise.reject('Página em cache.');
    } else {
        return esperaAi('Baixei a imagem', 3000);
    }

    //OBS: qualquer uma das duas (.resolve e esperaAi) pode usar .then() e .catch() pois ambas são promises.
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(error => console.log('ERRO: ', error));

// Promisse.reject
