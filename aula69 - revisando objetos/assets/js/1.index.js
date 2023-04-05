//criando objeto literal (básico)
const pessoa = {
  nome: "Yuri",
  sobrenome: "Andrade",
  falarNome: function () {                //IMPORTANTE: um método funciona como uma chave do objeto, exemplo linha 6
    console.log(`Nome: ${this.nome}`);
  },
};

//acessando de forma básica
console.log(pessoa.nome, pessoa.sobrenome);
console.log('---------------\n');

//-----------------------------------------------------------------//

//outra forma de acessar
console.log(pessoa["nome"], pessoa["sobrenome"]);
console.log('---------------\n');

//dessa forma você também pode acessar dinamicamente, exemplo:
const chave = "nome";
console.log(pessoa[chave]);
console.log('---------------\n');

//-----------------------------------------------------------------//