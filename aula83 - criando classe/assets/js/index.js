//exatamente a mesma coisa que constructor function

//primeira letra maiuscula
class Pessoa {
  //se você precisa de parâmetros na sua classe, faz no construtor:
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.falar();
  }

  //método: automaticamente o método vai pro prototype da classe
  falar() {
    console.log(`${this.nome} está falando`);
  }
}

const p1 = new Pessoa("Yuri", "Andrade");
console.log(p1);
p1.falar()


