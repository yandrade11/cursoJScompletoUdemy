const path = require("path");

//criando caminho
//const pathFile = path.resolve(__dirname, '..', 'teste.txt'); // para criar(escrever) em texto
const pathFile = path.resolve(__dirname, "pessoas.json"); //com path.resolve não se coloca "/"

const escrever = require("./modules/escrever");

//criando array de objetos que vai virar um JSON
const pessoas = [
  { nome: "Yuri" },
  { nome: "Leonardo" },
  { nome: "Enzo" },
  { nome: "Lucca" },
  { nome: "Yoman" },
];

//transformar o objeto (json) em string (não precisa em caso de .txt)
//OBS: segundo e terceiro parametro: para identar de forma tradicional
const json = JSON.stringify(pessoas, "", 2);
escrever(pathFile, json);
