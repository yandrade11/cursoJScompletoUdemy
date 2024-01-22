//IMPORTANDO DOTENV PARA GERENCIAR ACESSO
require("dotenv").config();

//IMPORTS
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//process.env.CONNECTIONSTRING: acessa dados da CONNECTIONSTRING (login, senha, emails, etc...) no .env para fazer CONEXÃO
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log("Conectado a base de dados.");
    app.emit("pronto");
  })
  .catch((error) =>
    console.log(`${Error}: não foi possível conectar a base de dados.`)
  );

//salva sessão na memória (cookie)
const session = require("express-session");

//sessão salva no BD, para não esgotar memória
const MongoStore = require("connect-mongo");

//flash messages assim que são lidas somem (são salvas em sessão apenas)
const flash = require("connect-flash");

const routes = require("./routes");

//recomenda-se utilizar path para o caminho sempre ser dinâmico e não dar erro na aplicação por ter mudado o caminho de algum arquivo
const path = require("path");

//desestruturação só funciona pq no arquivo "middleware.js" a única função exportada é a middlewareGlobal
const { middlewareGlobal } = require("./src/middlewares/middleware");

//permite POSTAR formulários para a nossa aplicação
app.use(express.urlencoded({ extended: true }));

//fazer PARSE de JSON pra dentro da aplicação
app.use(express.json());

//apontar caminho RELATIVO da pasta de estáticos (onde ficam os bundles)
//CAMINHO RELATIVO: se mudarem nome ou lugar da pasta o app para de funcionar
app.use(express.static("./public"));

//CONFIGURANDO A SESSÃO
const sessionConfig = session({
  //SECRET: como se fosse um serialkey
  secret: "ajghsd7iawdasda",
  //STORE: fazendo conexão buscando dados necessários (login, senha, etc...) no .env
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

//VIEWS: arquivos que são renderizados na tela (HTML, EJS, etc...)
//apontar caminho ABSOLUTO da views para o express
//CAMINHO ABSOLUTO: dinâmico
app.set("views", path.resolve(__dirname, "src", "views"));

//Engine utilizada para renderizar arquivo esse EJS em HTML
//essa engine permite utilizar if, for, echo (print na tela), etc...
app.set("view engine", "ejs");
//OBS: EJS é o que mais se assemelha com HTML

//middleware próprio
app.use(middlewareGlobal);
//dizer pro express usar suas rotas
app.use(routes);

//após conectado, está 'pronto' para escutar requisições ao banco
app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000...");
  });
});
