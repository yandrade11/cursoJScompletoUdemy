// HERANÇA
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

//produto deve poder receber desconto e aumento (em reais)
Produto.prototype.aumento = function (quantidade) {
  this.preco += quantidade;
};
Produto.prototype.desconto = function (quantidade) {
  this.preco -= quantidade;
};

//criando (especializando) função Camiseta filha de Produto
//dessa forma não preciso reescrever as props (nome, preco, aumento e desconto) na nova função
function Camiseta(nome, preco, cor) {
  // CHAMAR/HERDAR o construtor de Produto
  Produto.call(this, nome, preco); //THIS: instância do objeto criado pela função camiseta
  this.cor = cor;
}

//cria um objeto VAZIO (ou seja, com constructor vazio), para CLONAR o prototype de Produto e atrelar esse objeto vazio e com constructor vazio ao Camiseta.prototype
Camiseta.prototype = Object.create(Produto.prototype);

// agora o construtor CAMISETA virou PRODUTO, e eu preciso retornar ele a Camiseta já com propriedades e métodos de Produto, ou seja.
Camiseta.prototype.constructor = Camiseta;

//---
console.log("---");

function Caneca(nome, preco, material) {
  Produto.call(this, nome, preco);
  this.material = material;
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camisa = new Camiseta("Regata", 50, "Preta");
camisa.desconto(10);
camisa.aumento(10); //aqui ainda funciona com real

console.log(camisa);

/* --- SOBRESCREVENDO AUMENTO EM % somente para Caneca --- */

Caneca.prototype.aumento = function (percent) {
  this.preco = (percent / 100) * this.preco + this.preco;
};
const caneca = new Caneca("Geek", 20, "Porcelana", 5);
caneca.aumento(10);

console.log(caneca);
