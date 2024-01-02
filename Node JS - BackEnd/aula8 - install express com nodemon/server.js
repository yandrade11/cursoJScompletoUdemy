const express = require("express");

//carregando express
const app = express();

//rota /
app.get("/", (require, response) => {
  //require: requisição ou get da rota/página
  //response: o que eu vou mandar do servidor pro cliente

  response.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.post("/", (req, res) => {
  res.send("Recebi o formulário.");
});

//rota contato
app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em contato conosco.");
});

app.listen(3000, () => {
  //deixando mensagem no terminal enquanto server estiver rodando...
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000...");
});
