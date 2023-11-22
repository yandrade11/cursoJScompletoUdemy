//XMLHttpRequest = da um get/post em qualquer conteúdo (html, xml, json, texto puro, etc...)

const request = obj => {
    //xhr: abreviação muito usada de XMLHttpRequest(), também podem usar ajax
    const xhr = new XMLHttpRequest();

    //parâmetros do open: get ou post, o caminho da url que vai abrir, síncrono = false e assíncrono = true
    xhr.open(obj.method, obj.url, true);

    //se fosse um post teria que mandar nos parâmetros do send os dados de post
    xhr.send();

    xhr.addEventListener('load', () => {
        //xhr.status mostra o código de estado http
        //xhr.statusText mostra só a descrição do código
        if (xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);
        } else {
            obj.error({
                code: xhr.status,
                msg: xhr.statusText
            })
        }
    });
}

//pegando click em toda pagina
document.addEventListener('click', elem => {
    const element = elem.target;

    //pegando a tag do elemento clicado
    const tag = element.tagName.toLowerCase();

    if (tag === 'a') {
        //prevenindo o evento de click, ou seja, quando clicar não vai pra outra página
        elem.preventDefault();
        carregaPagina(element);
    }
})

function carregaPagina(element) {
    const href = element.getAttribute('href');

    //OBS: forma acadêmica para entender a declaração do objeto
    // const objConfig = {
    //     method: 'GET',
    //     url: href,
    //     success(response) {
    //         carregaResultado(response);
    //     },
    //     error(errorText) {
    //         console.log(errorText);
    //     },
    // }

    //aqui estou declarando o objeto direto, sem várivel
    request({
        method: 'GET',
        url: href,
        success(response) {
            carregaResultado(response);
        },
        error(errorText) {
            console.log(errorText);
        },
    })
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML += response;
}