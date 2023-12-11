//como importar em NodeJS
const mod1 = require("./mod1");

//para importar coisa específica
const mod11 = require("./mod1").falaNome;

//ou
const falaNome = mod1.falaNome;

//retorna undefined se não tiver nenhum return na função
//se for feito sem arrow function em alguns casos também retorna undefined (mesmo com return)
console.log("\n-------------IMPORTS-------------\n");
console.log("import: ", mod1);
console.log("mod11: ", mod11);
console.log("falaNome: ", falaNome);

//também da pra fazer com destructuring
const { nome, sobrenome, falaNome } = require("./mod1");

console.log('nome: ', nome);
console.log('sobrenome: ', sobrenome);
// console.log('falaNome: ', falaNome); como ja foi declarado antes deixei comentado mas funciona apagando o de cima.