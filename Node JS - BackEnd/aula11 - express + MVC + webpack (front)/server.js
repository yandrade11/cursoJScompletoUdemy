const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

//dizer pro express salvar os get no navegador
app.use(express.urlencoded({ extended: true }));

//apontar caminho RELATIVO da pasta de estáticos
app.use(express.static("./public"));

//apontar caminho ABSOLUTO da views para o express
app.set("views", path.resolve(__dirname, "src", "views"));

//apontando pro express qual engine usar
//OBS: ejs é o que mais se assemelha com HTML
//essa engine permite utilizar if, for, echo (print na tela), etc...
app.set("view engine", "ejs");

//dizer pro express usar suas rotas
app.use(routes);

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000...");
});
