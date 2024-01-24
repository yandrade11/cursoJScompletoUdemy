//IMPORTS
const express = require("express");
const route = express.Router();

const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");
// const contatoController = require("./src/controllers/contatoController");

// ROTAS DA HOME
route.get("/", homeController.index);

// ROTAS DE LOGIN
route.get('/login/', loginController.index);
route.get('/login/register', loginController.register);
// route.get('/login/validate', loginController.validate);


// ROTAS DE CONTATOS
// route.get("/contato", contatoController.paginaInicial);

//exportando a rota
module.exports = route;
