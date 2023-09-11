//factory function com polimorfismo pelo prototype
//OBS: melhor COMPOSÍÇÃO do que utilizar HERANÇA (propriedade.call()) pois a hierarquia da herança é frágil
//além disso herança tende a dar complexidade sem necessidade, ao código.

//COMPOSIÇÃO OU MIXING
const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

//OBS: você TEM que colocar o método dentro de uma constante/variaável, não funciona sem.
const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};

//FORMA 1: criando prototype das pessoas (cada pessoa criada) DESACOPLANDO os métodos do construtor (constructor function) ou factory function
const pessoaPrototype = { ...falar, ...comer, ...beber }; //copiando os métodos para o prototype

//FORMA 2: {} cria um objeto vazio e coloca os métodos dentro, passando como constante
const pessoaPrototype2 = Object.assign({}, falar, comer, beber);

function criaPessoa1(nome, sobrenome) {
  // tradicional de factory function
  //   return {
  //     nome,
  //     sobrenome,
  //     falar() {
  //       console.log(`${this.nome} está falando`);
  //     },
  //   };

  // OBS: NÃO FAZER MÉTODO ACOPLADO NA CLASSE: performance, a cada classe criada, cria um novo método

  //criando objeto vazio, passando o prototipo e criando propriedades
  return Object.create(pessoaPrototype, {
    nome: { value: nome }, //cada propriedade vira um objeto, onde posso usar defineProperties
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa1("Yuri", "Andrade");
console.log(p1);
