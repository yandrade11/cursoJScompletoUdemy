//ROUTER: aqui não fazemos mais as funções, apenas apontamos a exportamos a route e importamos a controller

const express = require("express");

//permite usar esse js como rota
const route = express.Router();

//importando os controllers
const homeController = require("./controllers/homeController");
const contatoController = require("./controllers/contatoController");

// ROTAS DA HOME
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);


// ROTAS DE CONTATOS
route.get("/contato", contatoController.paginaInicial);

//exportando a rota
module.exports = route;
