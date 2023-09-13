//ESTRUTURA DE DADOS MAP() diferente de array.map()

const pessoas = [
  { id: 3, nome: "Vegildo" },
  { id: 2, nome: "Yuri" },
  { id: 1, nome: "Enzo" },
];

const novasPessoas = {}

//FORMA 1 (melhor se tiver POUCAS propriedades pra trazer)
//OBS: for of funciona com destructuring
// for (const { id, nome } of pessoas) {
//   novasPessoas[id] = { id, nome };
// }

//FORMA 2 (melhor se tiver MUITAS propriedades pra trazer)
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas[id] = { ...pessoa };
}
// console.log("novasPessoas: ", novasPessoas);
console.log("novasPessoas: ", novasPessoas);

//REPARE QUE NOS CASOS ACIMA, O RESULTADO FOI REORDENADO PELO ID CRESCENTE, para consertar vamos utilizar o MAP()

const novasPessoas2 = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;

  //SET: eu consigo setar o map vazio com chave/valor sem mexer na estrutura ou ordenação
  novasPessoas2.set(id, { ...pessoa });
}
console.log("novasPessoas2: ", novasPessoas2);

//GET: eu consigo pegar a pessoa indicando o ID passado em PESSOAS
console.log("GET 3: ", novasPessoas2.get(3));

//retornando como array
for (const pessoa of novasPessoas2) {
  console.log("como array: ", pessoa);
}

//eu também posso fazer destructuring e passar o valor do objeto OU pegar só um dado caso necessario
//OBS: não é muito utilizado
for (const [identifier, { id, nome }] of novasPessoas2) {
  console.log("identifier, id, nome: ", identifier, id, nome);
}

//outra forma de pegar somente chaves
for (const chave of novasPessoas2.keys()) {
  console.log("chave: ", chave);
}

//outra forma de pegar somente valores
for (const valor of novasPessoas2.values()) {
  console.log("valor: ", valor);
}

//como eliminar chave/valor
const novasPessoas3 = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;

  novasPessoas3.set(id, { ...pessoa });
}
novasPessoas3.delete(3);
console.log(novasPessoas3);
