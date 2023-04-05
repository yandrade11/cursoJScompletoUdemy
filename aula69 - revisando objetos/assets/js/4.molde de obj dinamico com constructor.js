//criando molde para criar propriedades do objeto (com padrões de projeto)
//usando FACTORY FUNCTIONS ou CONSTRUCTOR FUNCTIONS
//com classes são "sintaxe suggar" (abstrair a dificuldade de utilizar os outros dois)

//constructor function (cria um objeto literal, ou seja, o obj PESSOA1 é uma instancia do obj construtor PESSOA)
function Pessoa(nome, sobrenome) {
  //this.nome é o mesmo que: p01.nome, p02.nome, etc... dinamicamente
  this.nome = nome;
  this.sobrenome = sobrenome;
}

//O new cria um obj vazio e atrela a palavra-chave "this" ao obj vazio criado
const p01 = new Pessoa("Indy", "Moraes");

//-----------------------------------------------------------------//

//diferença do constructor para o factory: ele mostra quem construiu o objeto (no caso o PESSOA)
console.log(p01);
console.log("---------------\n");

//-----------------------------------------------------------------//

//IMPORTANTE: em instância de objetos, quando você altera um valor de uma chave, você não altera o CONST, por isso o exemplo abaixo funciona:
const p02 = new Pessoa("Yuri", "Andrade");
console.log(p02); //antes de mudar o valor da chave do CONST
p02.nome = "Enzo";
console.log(p01);
console.log(p02); //depois de mudar o valor da chave do CONST

//-----------------------------------------------------------------//

//os valores das chaves também podem ser imutáveis assim:
Object.freeze(p02); //agora se eu tentar mudar o valor da chave nome, por exemplo, nada acontece (não da erro mas não altera)
p02.nome = "Yuri";
console.log("Valor imutável: ", p02);

//-----------------------------------------------------------------//

//caso você queira travar qualquer propriedade do objeto, faça o freeze no this do construtor, exemplo:
//IMPORTANTE: você também não poderá adicionar novas propriedades ao objeto construtor após o freeze no this
function PessoaFreeze(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this);
}

const p03 = new PessoaFreeze("Adalberto", "Pinto");
p03.nome = "Aquino";
p03.sobrenome = "Ciro";
console.log("Valor Imutável de p03: ", p03);
