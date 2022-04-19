//Para cada elemento:
//Retorne apenas uma string com nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto

const pessoas = [
  { nome: "Yuri", idade: 30 },
  { nome: "Enzo", idade: 7 },
  { nome: "Yoman", idade: 83 },
  { nome: "Creuza", idade: 63 },
  { nome: "Aline", idade: 40 },
];

const nomeDasPessoas = pessoas.map((obj) => `\nNome: ${obj.nome}`);
console.log(`NOME DAS PESSOAS: \n`, nomeDasPessoas.toString());

console.log("------------------\n");

const removeChaveNome = pessoas.map((obj) => {
  return `Idade: ${obj.idade}`;

  //outra forma:
  //delete obj.nome

  //outra forma:
  //return { idade: obj.idade }
});
console.log(`REMOVE NOME: \n`, removeChaveNome);

console.log("------------------\n");

const addID = pessoas.map((obj) => {
  //aqui estou arredondando os numeros aleatorios cheios de decimais
  let idAleatorio = Math.round(Math.random() * (100 - 1) + 1);

  //AQUI ESTOU MEXENDO NO ARRAY ORIGINAL PARA ADD UM OBJETO CHAMADO ID
  obj.id = idAleatorio;
  return obj;
});
console.log(`ADD ID: \n`, addID);

console.log("------------------\n");

//PARA CRIAR UM NOVO OBJETO E NÃO MEXER NO ARRAY ORIGINAL:
const addId2 = pessoas.map((obj) => {
  let idAleatorio = Math.round(Math.random() * (100 - 1) + 1);

  const novoObj = { ...obj }; //SPREAD OPERATOR para copiar o array original
  novoObj.id = idAleatorio;

  return obj;
});
console.log(`ADD ID 2: \n`, addId2);
