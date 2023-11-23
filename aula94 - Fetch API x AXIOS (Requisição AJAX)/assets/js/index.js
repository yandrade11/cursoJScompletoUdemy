//Fetch API para buscar o arquivo json na raiz do projeto
fetch('pessoas.json')
    //convertendo PROMISE em json, .json() cria uma nova PROMISE
    .then(response => response.json())
    //jogando essa nova PROMISE JSON na pagina pela função
    .then(jsonPessoas => carregaDadosPaginaFetch(jsonPessoas));

//OBS: para utilizar este, troque o nome da função

axios('pessoas.json')
    //.data() não gera uma nova promise, por isso não preciso de 2 .then()
    .then(response => carregaDadosPaginaAxios(response.data));


function carregaDadosPaginaAxios(jsonPessoas) {
    const table = document.createElement('table');

    //criando e populando tabela que vai aparecer na pagina
    for (const pessoa of jsonPessoas) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        td.className = 'nome';
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        td.className = 'idade';
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.sexo;
        td.className = 'sexo';
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.estado;
        td.className = 'estado';
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.empresa;
        td.className = 'empresa';
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = `R$ ${pessoa.salario},00`;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}

function carregaDadosPaginaFetch() {
}