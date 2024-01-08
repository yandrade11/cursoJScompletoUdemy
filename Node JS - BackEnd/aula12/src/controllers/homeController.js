exports.paginaInicial = (req, res, next) => {
  res.render("index");
  console.log("\nRespondendo ao cliente...");

  console.log(
    `DURANTE REQUISIÇÃO: Olha o que tem na req.session.nome: ${req.session.nome}\n`
  );

  //você também pode executar uma função/classe DEPOIS da requisição ser devolvida (exemplo no route.js)
  next();
};

//pegando resposta do middleware para tratar 
exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
