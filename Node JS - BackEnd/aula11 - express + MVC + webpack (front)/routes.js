//ROUTER: aqui decidimos quais CONTROLLERS controlarão as rotas (páginas)

const express = require("express");

//permite usar esse js como rota
const route = express.Router();

//importando os controllers
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

// ROTAS DA HOME
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

// ROTAS DE CONTATOS
route.get("/contato", contatoController.paginaInicial);

//exportando a rota
module.exports = route;
