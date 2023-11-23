//FETCH API: já retorna por padrão uma PROMISE
fetch('pagina3.html').then(response => {
    //numa PROMISE sempre que eu "lanço (throw)" um erro no .then() ele direciona pro .catch()
    if (response.status !== 200) throw new Error('ERRO 404 MEU');

    return response.text(); //.text() retorna outra PROMISE, por tanto, precisa de outro .then() para converter a promise em 'texto' (HTML)
}).then(html => console.log(html))
    .catch(erro => {
        console.log('ERRO: ', erro);   //log: fundo branco
        console.warn('ERRO: ', erro);   //warn: fundo amarelo
        console.error('ERRO: ', erro);   //error: fundo vermelho
    });