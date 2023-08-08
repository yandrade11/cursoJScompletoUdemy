//getter e setter: forma de protege a propriedade (com tratativas)
//proteger no sentido de corrigir ou tratar um dado do usuário (por exemplo)

// COMO FAZER GETTER AND SETTER COM CONSTRUCTOR FUNCTION
const ProdutoGetAndSet = function (nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  //não trabalhar com propriedade do objeto "this.estoque = estoque" pois pode gerar um loop infinito, utilizar argumento estoque
  //para resolver esse problema OU até mesmo para proteger o dado inicial:
  let estoquePrivado = estoque;

  // configura UMA propriedade diretamente no construtor e não na instância do obj
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra ou não a chave e o valor
    configurable: true, // permite ou não, deletar ou reconfigurar a chave, ou seja, usar o defineProperty de novo

    //getter: função anônima para obter valor
    get: function () {
      return estoquePrivado; //aqui eu pego o estoque inicial (3)
    },

    //setter: settar/configurar valor
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("Não é um número"); //tratando erro, instanciando typeError para identificar que é um erro de tipo de dado

        //não precisa mais do return, pois a classe TypeError ja tem um retorno
        //return;
      }

      estoquePrivado = valor; //aqui eu seto um novo valor pro estoque, para confirmar que ele é um número.
    },
  });

  //você também pode usar defineProperties para configurar mais de uma propriedade
};

//instância do obj construtor
const p1 = new ProdutoGetAndSet("Camisa", 20, 3);
p1.estoque = "O valor que eu quero: "; //variável não vai ser trocada (setada) enquanto eu não passar um number
// p1.estoque = 500;

console.log(p1.estoque);
