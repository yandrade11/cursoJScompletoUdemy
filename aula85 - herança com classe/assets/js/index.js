class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado.`);
      return;
    }

    this.ligado = true;
  }
}

//HERANÇA: a classe smartphone herda propriedades e métodos da classe
class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    //SUPER: herda propriedades do construtor da superclass (pai)
    //OBS: sempre que tem extends, tem que chamar o super()
    super(nome); //passar por parâmetros os mesmos parâmetros usados no construtor da superclass
    this.cor = cor;
    this.modelo = modelo;
  }
}

const s1 = new Smartphone("iPhone", "Preto", "15");
s1.ligar();
console.log(s1);

//HERANÇA DA CLASSE HERDADA
class App extends Smartphone {
  constructor(nome, cor, modelo, sistemaOperacional) {
    super(nome, cor, modelo);

    this.sistemaOperacional = sistemaOperacional;
  }

  //reescrevendo método criado na superclass (DispositivoEletronico), porém só é usado no escopo de App
  ligar() {
    console.log("Você alterou o método original");
  }
}

const a1 = new App("Word", "Verde", "v1.2", "iOS");
a1.ligar();
console.log(a1);
