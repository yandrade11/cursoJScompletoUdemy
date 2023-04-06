function Produto2(nome, preco, estoque) {
  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra ou não a chave e o valor
      value: nome, // passa valor, também pode criar/passar métodos, funções, classes, etc...
      writable: true, // pode alterar ou não a prop
      configurable: true, // permite ou não, deletar ou reconfigurar a chave, ou seja, usar o defineProperty de novo
    },

    preco: {
      enumerable: true, // mostra ou não a chave e o valor
      value: preco, // passa valor, também pode criar/passar métodos, funções, classes, etc...
      writable: true, // pode alterar ou não a prop
      configurable: true, // permite ou não, deletar ou reconfigurar a chave, ou seja, usar o defineProperty de novo
    },

    estoque: {
      enumerable: true, // mostra ou não a chave e o valor
      value: estoque, // passa valor, também pode criar/passar métodos, funções, classes, etc...
      writable: true, // pode alterar ou não a prop
      configurable: true, // permite ou não, deletar ou reconfigurar a chave, ou seja, usar o defineProperty de novo
    },
  });
}

//instância do obj construtor
const p1 = new Produto2("Camisa", 20, 3);
console.log(p1);
console.log("---------------\n");

//-----------------------------------------------------------------//

//Object.keys cria um array com todas as chaves do objeto
console.log(Object.keys(p1));

for (let chave in p1) {
  console.log("chave: ", chave);
}
