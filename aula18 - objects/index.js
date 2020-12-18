const nome01 = 'Yuri';
const sobrenome01 = 'Andrade';
const idade01 = 29;

const nome02 = 'Alex';
const sobrenome02 = 'Santana';
const idade02 = 22;

/*------------------------------------------------*/

//o objetivo de se criar um objeto é para não ter que criar 2130861236 variaveis para o caso acima em que existam varios cadastros
//como criar objeto tradicional (NÍVEL BÁSICO):
const pessoa1 = {
    nome: 'Yuri',
    sobrenome: 'Andrade',
    idade: 29
};
//para acessar os atributos de um objeto
console.log(pessoa1.nome);

//não melhorou muita coisa do primeiro exemplo, não é?
const pessoa2 = {
    nome: 'Alex',
    sobrenome: 'Santana',
    idade: 22,

    //utilizando função local para imprimir valor (neste caso não precisa da palavra FUNCTION)
    fala() {
                     //this = este objeto (ou seja pessoa2.nome)
        console.log(`\n${this.nome} ${this.sobrenome} está falando oi`);
        console.log(`A minha idade atual é ${this.idade} anos`);
    },

    //criação de MÉTODOS (funções dentro de objetos)
    incrementaIdade() {
        this.idade++;
    }
};
pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala();

/*------------------------------------------------*/

//melhor forma de se fazer OBJETO utilizando FUNÇÃO, o nome disso é MÉTODO:
function criaPessoa(nome, sobrenome, idade) {
    return { //retorna objeto
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

//enxugando criação de objeto
function criaPessoa2(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade      //já que o ARGUMENTO tem o mesmo nome do ATRIBUTO, não precisa repetir
    } //retorna objeto
}

//preenchendo os atributos do objeto da função, através de ARGUMENTO:
const pessoa3 = criaPessoa('Yuri', 'Andrade', 25)
console.log(pessoa1.nome);