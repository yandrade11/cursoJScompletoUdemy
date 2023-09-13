class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  set nomeCompleto(nomeCompleto) {
    nomeCompleto = nomeCompleto.split(" ");
    this.nome = nomeCompleto.shift();
    this.sobrenome = nomeCompleto.join();
  }

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  // nomeCompleto() {
  //   return `${this.nome} ${this.sobrenome}`;
  // }

  //OBS: sem GET a chamada deve ser p1.nomeCompleto()
}

const p1 = new Pessoa("Yuri", "Andrade");
p1.nomeCompleto = 'Leo Vegildo';
console.log(p1.nomeCompleto);
