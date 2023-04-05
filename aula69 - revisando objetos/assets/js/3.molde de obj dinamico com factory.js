//criando molde para criar propriedades do objeto (com padrões de projeto)
//usando FACTORY FUNCTIONS ou CONSTRUCTOR FUNCTIONS
//com classes são "sintaxe suggar" (abstrair a dificuldade de utilizar os outros dois)

//factory functions (cria um objeto direto, ou seja, sem instanciar)
function criaPessoa(id, nome, sobrenome, idade) {
  return {
    id,
    nome,
    sobrenome,
    idade,

    //se "criaPessoa" fosse uma classe, o get funcionaria como se fosse um atributo da classe e protege o objeto
    //MAS ele ainda é uma propriedade do objeto
    get fichaCompleta() {
      return `
      ID: ${this.id}\n
      Nome: ${this.nome}\n
      Sobrenome: ${this.sobrenome}\n
      Idade: ${this.idade}\n
      `;
    },
  };
}

//-----------------------------------------------------------------//

//instanciando novas pessoas
const p1 = criaPessoa("01", "Yuri", "Andrade", "31");
const p2 = criaPessoa("02", "Leonardo", "Braga", "33");

//-----------------------------------------------------------------//

//acessando dados das pessoas
console.log(p1.fichaCompleta);
// console.log(p2.fichaCompleta);
console.log('---------------\n');
