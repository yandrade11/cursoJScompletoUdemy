//criando objeto apartir de construtor, ou seja instanciando (básico)
const pessoa2 = new Object();
pessoa2.nome = "Leonardo";
pessoa2.sobrenome = "Braga";
pessoa2.idade = 31;

console.log(pessoa2.nome, pessoa2.sobrenome);
console.log('---------------\n');

//-----------------------------------------------------------------//

//apagando chave específica
delete pessoa2.sobrenome;
console.log("Nome: ", pessoa2.nome, "Sobrenome: ", pessoa2.sobrenome);
console.log('---------------\n');

//-----------------------------------------------------------------//

//criando métodos (funções dentro do objeto)
pessoa2.falarNome = function () {
  console.log(`Nome: ${this.nome}`); //this nesse caso representa pessoa2 (pois falarNome é um método do objeto pessoa2)
};

//chamando método do objeto
pessoa2.falarNome();
console.log('---------------\n');

//-----------------------------------------------------------------//

//outro exemplo de método
pessoa2.pegaDataNascimento = function () {
  //return 2023 - this.idade     - escrita acadêmica

  //melhor escrita instanciando data atual
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};
console.log(`Data do nascimento: ${pessoa2.pegaDataNascimento()}`);
console.log('---------------\n');

//-----------------------------------------------------------------//

//exemplo de "for in" com objeto
for (let chave in pessoa2) {
  console.log(`A CHAVE do forin: ${chave}`); //mostra a CHAVE, em caso de métodos mostra o nome do método como chave
  console.log(`o VALOR da chave do forin: ${pessoa2[chave]}`); //mostra o VALOR da chave, em caso de método, o valor do método é o próprio
  // console.log(`CHAVE do forin: ${pessoa2.chave}`);  UNDEFINED pois "for in" é dinâmico
}
console.log('---------------\n');