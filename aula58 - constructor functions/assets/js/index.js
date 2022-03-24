//diferenças entre funções construtoras e funções fábricas
//função construtora já cria e retorna objeto automaticamente
//função construtora começa com maiuscula -> Pessoa (new) -> obrigatorio o new para criar novo objeto
//QUANDO USAR: quando você quer criar um molde (de propriedades) e instanciar várias vezes***

function Pessoa(nome, sobrenome) {
  //atributo privado (que não esteja disponível fora do escopo da função construtora, ou seja não da pra chamar lá embaixo por .)
  const ID = 123;
  const metodoInterno = function () {

  };

  this.nome = nome;
  this.sobrenome = sobrenome;

  //método públicos = função dentro do objeto
  //o this aqui é referente a variável onde o objeto foi instanciado (p1 ou p2) citada lá embaixo
  this.metodo = () => {
    console.log(
      `Sou um método que chama propriedades desse objeto: ${this.nome} ${this.sobrenome}`
    );
  };
}

//cada linha é uma NOVA instância do objeto pessoa recebendo como parâmetro nome e sobrenome
const p1 = new Pessoa("Yuri", "Andrade");
const p2 = new Pessoa("Ursula", "Belém");
p1.metodo();
