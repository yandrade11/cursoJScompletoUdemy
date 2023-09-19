//MÉTODOS DE INSTÂNCIA (NEW) E ESTÁTICOS

class Exemplo {
  constructor(nome) {
    this.nome = nome;
  }

  //método estático
  static soma(x, y) {
    //o this retorna a CLASSE e não a instância ou o construtor
    return console.log(`this: ${this} \n ------- \n soma: ${x + y}`);
  }

  msg() {
    console.log("Método instanciado");
  }
}

const exemplo1 = new Exemplo("exemplo1");

//chamada de método instanciado
exemplo1.msg();

//chamada de método estático
//obs: o método estático NÃO TEM acesso aos dados da instância
Exemplo.soma(1, 3);

//OBS: Numa função externa a classe, o THIS é o objeto global do node. Por isso, utilize método estático para facilitar.
