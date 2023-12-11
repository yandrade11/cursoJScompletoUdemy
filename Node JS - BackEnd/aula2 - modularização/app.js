//importando funcao anônima e atribuindo à variável multiplicacao
//funciona parecido com o exports default do ES6, se tiver outro export dentro da MOD.js deixa de funcionar
const multiplicacao = require("./B/C/mod");
console.log("executando no import:", multiplicacao(2, 3));

//importando classe

//MODULARIZAÇÃO: importando da mod2, que importa da modClasse
const Cachorro = new require('./z/mod2');
const c1 = new Cachorro("Thor");

c1.latir();

