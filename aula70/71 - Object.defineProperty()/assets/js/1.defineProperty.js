const Produto = function (nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  // configura UMA propriedade diretamente no construtor e não na instância do obj
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra ou não a chave e o valor
    value: estoque, // passa valor, também pode criar/passar métodos, funções, classes, etc...
    writable: true, // pode alterar ou não a prop
    configurable: false, // permite ou não, deletar ou reconfigurar a chave, ou seja, usar o defineProperty de novo
  });

  //você também pode usar defineProperties para configurar mais de uma propriedade
};

//instância do obj construtor
const p1 = new Produto("Camisa", 20, 3);
console.log(p1);
console.log("---------------\n");

//-----------------------------------------------------------------//

//Object.keys cria um array com todas as chaves do objeto
console.log(Object.keys(p1));

for (let chave in p1) {
  console.log("chave: ", chave);
}
