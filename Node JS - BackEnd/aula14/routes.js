const express = require("express");

const route = express.Router();

const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

// ROTAS DA HOME
route.get("/", homeController.paginaInicial);

//exportando a rota
module.exports = route;
