const express = require("express");

//por convenção se usa "app" na variável que carrega o express
const app = express();

//como fazer get com express
app.get("/", (require, response) => {
  //require: requisição ou get da rota/página
  //response: o que eu vou mandar do servidor pro cliente

  //1: estou enviando um POST...
  response.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

//2:então irá cair aqui logo em seguida
//RESUMO: recebi a requisição get no localhost:3000/ e fiz um post assim a mesma página irá mudar
app.post("/", (req, res) => {
  res.send("Recebi o formulário.");
});

//como criar uma nova rota (normal ver os paraâmetros assim)
app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em contato conosco.");
});

//como fazer meu servidor ficar escutando uma porta
//OBS: passa a porta como parâmetro, geralmente uma porta nunca usada
app.listen(3000, () => {
  //deixando mensagem no terminal enquanto server estiver rodando...
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000...");
});
