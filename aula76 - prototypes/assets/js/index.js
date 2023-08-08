// Função construtora -> molde (classe) ou seja, funciona como se fosse uma classe

//toda função construtora ou classe tem um prototipo nativo
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  /* quando a propriedade, do tipo MÉTODO, tem o mesmo nome no CONSTRUTOR e no PROTOTYPE, esse aqui sobrescreve o que foi criado no protótipo */

  // this.nomeCompleto = () => "ORIGINAL: " + this.nome + " " + this.sobrenome;
}

// instância função construtora dentro de uma variável (objeto)
const pessoa1 = new Pessoa("Yuri", "Andrade");
const pessoa2 = new Pessoa("Leonardo", "Braga");
const data = new Date(); //data é uma função construtora

//--------------------- PROPROTYPE (PROTÓTIPOS) -----------------------
//Prototype: quando algo criado pela primeira vez, servindo de modelo para futuras produções

//criando função (método) no prototype (__proto__)
Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

console.log(
  "Método nomeCompleto criado no protótipo: ",
  pessoa1.nomeCompleto() //o método já está criada no protótipo da função construtora/classe, mas também não mostra O RESULTADO no console, a não ser que voce chame de fato o método nomeCompleto.
);

console.dir(pessoa1);
console.dir(pessoa2);

//OBS: usar PROTOTYPE para criar métodos, melhora DRASTICAMENTE A PERFORMANCE, pois ele não cria a propriedade método toda vez que instanciar a função construtora/classe
