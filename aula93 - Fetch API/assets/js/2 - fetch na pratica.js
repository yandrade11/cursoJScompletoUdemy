//pegando click em toda pagina
document.addEventListener('click', elem => {
    const element = elem.target;
    const tag = element.tagName.toLowerCase();

    if (tag === 'a') {
        //prevenindo o evento de click, ou seja, quando clicar não vai pra outra página
        elem.preventDefault();
        carregaPaginaAsync(element);
    }
});

//COM PROMISE (trocar chamada acima, se quiser testar)
function carregaPagina(element) {
    const href = element.getAttribute('href');

    fetch(href)
        .then(response => {
            if (response.status !== 200) throw new Error('ERRO tratado: ');
            //fetch retorna JSON e tem que transformar em texto para html
            return response.text()
        })
        .then(html => carregaResultado(html))   //carrega html
        .catch(error => console.log('ERRO: ', error));
}

//COM ASYNC e AWAIT
async function carregaPaginaAsync(element) {
    try {
        const href = element.getAttribute('href');
        const response = await fetch(href);

        if (response.status !== 200) throw new Error('ERRO tratado: ');

        //fetch retorna JSON e tem que transformar em texto para html
        const html = await response.text();
        carregaResultado(html);
    } catch (error) {
        console.log(error);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML += response;
}