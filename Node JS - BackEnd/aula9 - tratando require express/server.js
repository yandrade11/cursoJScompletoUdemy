const express = require("express");
const app = express();

//COMO FAZER O REQ.BODY TRATAR O QUE O USUÁRIO DIGITA NO FORM?

/****************************
 
para entender: 

app.use(
  express.urlencoded({
    extended: true,
  })
);

*****************************/

//melhor escrita:
app.use(express.urlencoded({ extended: true }));

//ATENÇÃO: nenhum log dentro de app. aparece no console do navegador
app.get("/", (require, response) => {
  response.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nomeUsuario"><br><br>
    Sobrenome: <input type="text" name="sobrenomeUsuario"><br><br>
    Idade: <input type="text" name="idadeUsuario"><br><br>
    <button>Enviar</button>
    </form>
    `);
});

//COMO COLOCAR PARÂMETRO NA ROTA? (req.params)

//para acessar essa rota no navegador: http://localhost:3000/params/numeroQualquer
//OBS: o '?' serve para deixar o parâmetro idUsuario OPCIONAL e você poder acessar a /testes/
app.get("/params/:idUsuario?/:nomeUsuario?", (req, res) => {
  //mostra no terminal os req.params como objeto: {idUsuarios: '123'}
  console.log(req.params);
  res.send(req.params);
});

//COMO COLOCAR QUERYSTRING NA ROTA? (req.query)

//para acessar essa rota no navegador: http://localhost:3000/querys?nome=Yuri&sobrenome=Andrade&idade=32
app.get("/querys", (req, res) => {
  //mostra no terminal os req.query como objeto
  console.log(req.query);

  //pegando query específica:
  console.log("req.query.nome: ", req.query.nome);

  res.send(req.query);
});

//COMO ACESSAR/TRATAR O POST (req.body)
//req.body fica undefined até você fazer o extended lá em cima
app.post("/", (req, res) => {
  console.log(req.body);
  res.send(
    `Formulário recebido, confirme abaixo: <br><br> 
    Nome: ${req.body.nomeUsuario} <br><br> 
    Sobrenome: ${req.body.sobrenomeUsuario} <br><br> 
    Idade: ${req.body.idadeUsuario}`
  );
});

app.listen(3000, () => {
  //deixando mensagem no terminal enquanto server estiver rodando...
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000...");
});
