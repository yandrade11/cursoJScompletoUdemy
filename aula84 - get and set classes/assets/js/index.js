//propriedade da classe PRIVADA com dado PRIMITIVO SYMBOL
//OBS: cada vez que chama o Symbol, cria uma CHAVE e gera um id ÚNICO
const _velocidade = Symbol("velocidade"); //apesar de ser uma classe nativa, não precisa do NEW

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0; //jogando a CHAVE symbol dentro da classe
  }

  //criando um GET para acessar a CHAVE _velocidade através de CLASSE.VELOCIDADE
  get velocidade() {
    console.log('Getter');
    return this[_velocidade];
  }

  //permitindo setar valor da CHAVE através do this[_velocidade]
  set velocidade(valor) {
    console.log('Setter');
    if (typeof valor !== "number") return;
    if (valor <= 0 || valor >= 100) return;

    this[_velocidade] = valor;
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro("Fusca");
//OBS: a chamada do set NÃO TEM argumento ()
c1.velocidade = 2000;

//OBS: a chamada do get NÃO TEM argumento ()
console.log(c1.velocidade);

