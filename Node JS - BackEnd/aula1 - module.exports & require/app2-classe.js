//Importando classe em NodeJS
const { Pessoa } = require("./mod2-classe");
const mod2 = require("./mod2-classe");

const p1 = new Pessoa("Yuri");
console.log(p1);
console.log('mod2: ', mod2);

//modulos nativos e via NPM para funcionar:
//      passo 1 (terminal): npm init -y
//      passo 2 (terminal): npm i path
//      passo 3 (terminal): npm i axios

//para importar nativos e via NPM não precisa do caminho
const path = require("path");
const axios = require("axios");

// ta comentado pq o json não existe mais
axios("https://www.otaviomiranda.com.br/")
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));
