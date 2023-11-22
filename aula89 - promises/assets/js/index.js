//PROMISSES
//ESTADOS DA PROMISE: 
//  <pending>: quando o valor que você pediu ainda não está pronto
//  <fullfilled>: resolvida/sucesso
//  <rejected>: rejeitada

function random(min, max) {
    //passando segundo (argumento na chamada da função) para milissegundos
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    //espera x tempos para soltar a mensagem
    setTimeout(() => {
        console.log(msg);
    }, tempo)
}

//esperaAi('frase 1', random(1, 3));  // 1000ms = 1s
//esperaAi('frase 2', random(1, 3));  // fazendo random entre 1 e 3 segundos
//esperaAi('frase 3', random(1, 3));

//OBS: problema, você não consegue garantir que a ordem das frases seja executada


// -----------COMO RESOLVER COM CALLBACK-------------

function esperaAi2(msg, tempo, callback) {
    setTimeout(() => {
        console.log(msg);
        if (callback) callback();
    }, tempo)
}

// esperaAi2('frase 1 cb', random(1, 3), function () {
//     esperaAi2('frase 2 cb', random(1, 3), function () {
//         esperaAi2('frase 3 cb', random(1, 3));
//     });
// });

//OBS: problema, cadeia de funções dentro de funções para casos maiores


// -----------COMO RESOLVER COM PROMISSE-------------

function esperaAi3(msg, tempo) {
    //resolve: código executado com sucesso então resolve
    //reject: deu erro, então rejeita o código
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('Entrada de dados da mensagem inválida'));

        setTimeout(() => {
            resolve(msg);   //resolve só pode ter 1 parâmetro
        }, tempo)
    });
}

//then: executado quando resolve() é executado
//catch: executado quando reject() é executado
esperaAi3('Conexão com DB', random(1, 3))
    //response: é o argumento que vem de resolve()
    .then(response => {
        console.log(response);
        return esperaAi3('Atualizando dados da base', random(1, 3))
    })
    //depois da função chamda você tem que fazer algo com ela (no .then())
    .then(response => {
        console.log(response);
        return esperaAi3('Tratando dados da base', random(1, 3))
    }).then(response => {
        console.log(response);
    })
    .then(() => {
        console.log('DB conectado com sucesso e será exibido na tela.');
    })
    .then(() => {
        console.log('BAD VALUE');
        return esperaAi3(222, random(1, 3))
    })
    .catch(error => {
        console.log('Erro: ', error);
    });

//OBS: promisse torna o código ASSÍNCRONO (não roda em sequência)

console.log('Tudo que vem depois da promisse é executado antes dela terminar');

