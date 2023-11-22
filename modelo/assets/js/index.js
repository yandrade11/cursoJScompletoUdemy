function random(min = 0, max = 3) {
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

            //resolve só pode ter 1 parâmetro
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo)
    });
}

// TROCAR ISSO AQUI (comentar pra ver resultado de asyn/await)
esperaAi('fase 1', random())
    .then(valor => {
        console.log(valor);
        return esperaAi('fase 2', random());
    }).then(fase => {
        console.log(fase);
        return esperaAi('fase 3', random());
    }).then(fase => {
        console.log(fase);
    }).catch(erro => console.log(erro));


// POR ISSO AQUI (async/await é mais atualizado e utilizado, poucos casos onde a promise é melhor utilizada)
async function executa() {
    try {
        const fase1 = await esperaAi('fase 1', random());
        console.log(fase1);

        const fase2 = await esperaAi('fase 2', random());
        console.log(fase2);

        const fase3 = await esperaAi('3', random());
        console.log(fase3);
    } catch (error) {
        // executa até encontrar erro
        console.log('erro: ', error);
    }
}

executa();

//OBS: quando você não usa o await, a promise pode vir como <pending>, que significa que você pediu resultado antes dela estar pronta, pode resolver também com setTimeOut.