//como importar todo arquivo em NodeJS
const mod1 = require("./mod1");

//duas formas para importar coisa(s) específica(s)
const funcaoFalaNome = mod1.falaNome;
const mod11 = require("./mod1").falaNome;

//retorna undefined se não tiver nenhum return na função
//se for feito sem arrow function em alguns casos também retorna undefined (mesmo com return)
console.log("\n-------------IMPORTS-------------\n");

console.log("mod1: ", mod1);
console.log("mod11: ", mod11);
console.log("falaNome: ", funcaoFalaNome);


console.log("\n----------com destructuring----------\n");

//também da pra fazer com destructuring
const { NOME, SOBRENOME, falaNome } = require("./mod1");

//repare a forma que você exportou nome e sobrenome e não suas variáveis
console.log("nome: ", NOME);
console.log("sobrenome: ", SOBRENOME);
console.log("falaNome: ", falaNome);
