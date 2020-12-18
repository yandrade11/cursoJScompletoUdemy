const pessoa = {    
    nome: 'Yuri',
    sobrenome: 'Andrade',
    idade: 29,
    endereco: {                                 //objeto dentro de objeto, normal.
        logradouro: 'Rua: Inhangá',
        numero: 27,
        apartamento: 502,
    }
}

const end = pessoa.endereco.logradouro;               //atribuição normal
console.log(end);

//atribuição via desestruturação
//QUANDO VARIÁVEL E CHAVE DO OBJETO TEM O MESMO NOME ("SOBRENOME") DEVE SER ASSIM (PADRÃO DE ESCRITA E ECONOMIZA CODIGO)
const { nome, sobrenome, telefone = '(21) 96526-9775' } = pessoa;
console.log(nome, sobrenome, telefone);

//utilizando rest operator para pegar o endereço inteiro
const { nome: nome1, sobrenome: sobrenome1, idade, ...endereco } = pessoa;
console.log(endereco);

