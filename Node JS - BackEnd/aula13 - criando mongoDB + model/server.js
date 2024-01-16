//IMPORTANDO DOTENV PARA GERENCIAR ACESSO
require("dotenv").config();
const express = require("express");
const app = express();

//IMPORTANDO MONGOOSE, FAZENDO CONEXÃO COM CONNETCION STRING
const mongoose = require("mongoose");

//process.env.CONNECTIONSTRING: acessa valor da CONNECTIONSTRING no .env
mongoose
  .connect(process.env.CONNECTIONSTRING, {
    // objetos obsoletos e dão erro na conexão (antes garantiam conexão antes de qualquer coisa)
    // userNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a base de dados.");
    //cria um evento "pronto" assim que o banco estiver conectado
    app.emit("pronto");
  })
  .catch((error) =>
    console.log(`${Error}: não foi possível conectar a base de dados.`)
  );

const routes = require("./routes");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(routes);

//QUANDO APP TIVER 'PRONTO', FAÇA O QUE QUISER...
app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000...");
  });
});
