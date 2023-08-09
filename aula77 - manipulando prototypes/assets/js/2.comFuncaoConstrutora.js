function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

//lembrando de não mostrar a função no construtor por questão de performance
Produto.prototype.desconto = function (percent) {
  this.preco = this.preco - this.preco * (percent / 100);
};

Produto.prototype.aumento = function (percent) {
  this.preco = this.preco + this.preco * (percent / 100);
};

//instância de obj
const p1 = new Produto("camisa", 50);

//obj literal
const p2 = {
  nome: "calça",
  preco: 100,
};

// eu tinha feito da primeira forma, mas da segunda forma é mais seguro pois, o proto de p1 poderia ser mudado futuramente, além disso, não é necessário, performaticamente falando, trazer tudo de p1 para p2.

// Object.setPrototypeOf(p2, p1);
Object.setPrototypeOf(p2, Produto.prototype);

p1.desconto(10);
p2.aumento(50);

console.log(p1);
console.log(p2);

//---
console.log("---");

//aqui eu to criando um objeto de forma dinâmica utilizando método create nativo do Object
const p3 = Object.create(Produto.prototype, {
  tamanho: {
    //aqui eu posso definir a propriedade (igual defineProperty())

    writable: true,
    configurable: true,
    enumerable: true,
    value: 42,
  },

  //aqui eu também consigo criar propriedades e definir as propriedades herdadas de Produto
  nome: {
    value: "caneca",
    enumerable: true,
  },
  preco: {
    value: 10,
    enumerable: true,
  },
});

p3.aumento(50);
console.log(p3);
