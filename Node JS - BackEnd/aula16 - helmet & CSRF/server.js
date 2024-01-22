//IMPORTANDO DOTENV PARA GERENCIAR ACESSO
require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

//process.env.CONNECTIONSTRING: acessa valor da CONNECTIONSTRING no .env
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log("Conectado a base de dados.");
    app.emit("pronto");
  })
  .catch((error) =>
    console.log(`${Error}: não foi possível conectar a base de dados.`)
  );

//salva sessão na memória
const session = require("express-session");

const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const routes = require("./routes");
const path = require("path");
const middlewareGlobal = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

//configurando a sessão
const sessionConfig = session({
  //como se fosse um serialkey
  secret: "ajghsd7iawdasda",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    //quanto tempo em milésimos de segundos esse cookie vai durar?
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
    httpOnly: true,
  },
});
app.use(sessionConfig);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

//middleware próprio
app.use(middlewareGlobal);
app.use(routes);

//QUANDO APP TIVER 'PRONTO', FAÇA O QUE QUISER...
app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000...");
  });
});
