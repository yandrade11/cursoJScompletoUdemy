const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");

//isso é um middleware, assim como as funções que estão no controller
function meuMiddleware(req, res, next) {
  //req.session (sessão): para salvar no banco os registros do usuário
  req.session = { nome: "Yuri", sobrenome: "Andrade" };

  console.log("\nUm middleware passou antes da requisição");

  //se você não usar o next, ele não passa para a próxima função no route.get e fica solicitando eternamente
  next();
}

function ultimoMiddleware(req, res, next) {
  console.log("Middleware após a requisição");
  console.log(
    `ÚLTIMO MIDDLEWARE: Olha o que tem na req.session.nome: ${req.session.nome}\n`
  );
}



// ROTAS DA HOME
route.get("/", meuMiddleware, homeController.paginaInicial, ultimoMiddleware);

//exportando a rota
module.exports = route;
