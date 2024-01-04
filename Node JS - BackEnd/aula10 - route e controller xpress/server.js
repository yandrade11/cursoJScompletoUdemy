const express = require("express");
const app = express();
const routes = require("./routes");

//dizer pro express salvar os get no navegador
app.use(express.urlencoded({ extended: true }));

//dizer pro express usar suas rotas
app.use(routes);

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000...");
});
