// OBSOLETO

//XMLHttpRequest = da um get/post em qualquer conteúdo (html, xml, json, texto puro, etc...)

const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            //xhr.status mostra o código de estado http
            //xhr.statusText mostra só a descrição do código
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.status + ': ' + xhr.statusText)
            }
        });
    });
}

//pegando click em toda pagina
document.addEventListener('click', elem => {
    const element = elem.target;
    const tag = element.tagName.toLowerCase();

    if (tag === 'a') {
        //prevenindo o evento de click, ou seja, quando clicar não vai pra outra página
        elem.preventDefault();
        carregaPagina(element);
    }
});

async function carregaPagina(element) {
    const href = element.getAttribute('href');

    //declarando objeto configurado sem variável, forma dinâmica
    try {
        const response = await request({
            method: 'GET',
            url: href,
        });
        carregaResultado(response);
    } catch (erro) {
        console.log(erro);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML += response;
}