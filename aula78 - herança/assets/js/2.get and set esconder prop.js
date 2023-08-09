// HERANÇA
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantidade) {
  this.preco += quantidade;
};
Produto.prototype.desconto = function (quantidade) {
  this.preco -= quantidade;
};

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  //criando propriedade estoque e definindo para criar get/set (ou seja, poderia ter feito this.estoque = estoque se não precisasse criar um get/set ou mexer na configuração default)
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false, //não pode apagar a prop e nem sobrescrever a definição da prop

    //com get e set você esconde o valor do estoque no console e só mostra quando clicar (executa o set)
    get: function () {
      return estoque;
    },

    //no defineProperty, vocÊ só pode alterar o valor do estoque, caso tenha um set
    set: function (valor) {
      estoque = valor;
    },

    //OBS IMPORTANTÍSSIMA: o get também é usado em segurança, para esconder o dado no console
  });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca("Geek", 20, "Porcelana", 5);

console.log(caneca);
