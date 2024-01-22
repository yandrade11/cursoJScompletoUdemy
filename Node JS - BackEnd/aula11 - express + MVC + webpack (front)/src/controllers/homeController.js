//na controller é necessário sempre exportar para ser importado na router
exports.paginaInicial = (req, res) => {
  //SEND: substitui o html da pagina inicial
  // res.send(`
  //         <form action="/" method="POST">
  //             Nome: <input type="text" name="nomeCliente"><br><br>
  //             Sobrenome <input type="text" name="sobrenomeCliente"><br><br><br>

  //             <button>Enviar</button>
  //         </form>
  //     `);

  //RENDER: tendo uma view (HTML), o render adiciona o que você quiser na página inicial via EJS
  res.render("index", {
    //uma forma de jogar conteúdo na view index
    titulo:
      'Modelo <span style="color: red">MVC</span> + <span style="color: #e7c303">Express</span> + <span style="color: green">Webpack.</span>',
    // numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
  return;
};

//descobrir para onde vai esse POST no mongoDB (site)
exports.trataPost = (req, res) => {
  res.send(
    "Formulário enviado com sucesso <br><br>" +
      `Nome: ${req.body.nomeCliente}<br>` +
      `Sobrenome: ${req.body.sobrenomeCliente}`
  );

  // res.render("trataPost");
};
