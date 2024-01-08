const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

//COMO IMPORTAR FUNÇÃO MIDDLEWARE
const middleware = require("./src/middlewares/middleware");

//COMO IMPORTAR SEGUNDA FORMA DE MIDDLEWARE GLOBAL
//desestruturação
const { middlewareGlobal } = require("./src/middlewares/middleware");

//sempre por primeiro
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./public"));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

//CHAMANDO MIDDLEWARE GLOBAL PRÓPRIO EM TODAS AS ROTAS
app.use(middleware);
// app.use(middlewareGlobal);

//sempre por ultimo
app.use(routes);

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000...");
});
