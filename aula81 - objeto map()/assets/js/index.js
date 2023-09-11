//ESTRUTURA DE DADOS MAP() diferente de array.map()

const pessoas = [
  { id: 3, nome: "Vegildo" },
  { id: 2, nome: "Yuri" },
  { id: 1, nome: "Enzo" },
];

const novasPessoas = {};

//OBS: for of funciona com destructuring
for (const { id, nome } of pessoas) {
  console.log(id, nome);
}
