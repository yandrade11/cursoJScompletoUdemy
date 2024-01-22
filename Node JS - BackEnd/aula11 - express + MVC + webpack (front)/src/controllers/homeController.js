//na controller é necessário sempre exportar para ser importado na router
exports.paginaInicial = (req, res) => {
  // res.send(`
  //         <form action="/" method="POST">
  //             Nome: <input type="text" name="nomeCliente"><br><br>
  //             Sobrenome <input type="text" name="sobrenomeCliente"><br><br><br>

  //             <button>Enviar</button>
  //         </form>
  //     `);

  //agora com view faremos assim e o html em sí vai ficar dentro de views
  res.render("index", {
    //uma forma de jogar conteúdo na view index
    // titulo: 'Este será o <span style="color: red">título</span> da Página.',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
  return;
};

exports.trataPost = (req, res) => {
  // res.send(
  //   "Formulário enviado com sucesso <br><br>" +
  //     `Nome: ${req.body.nomeCliente}<br>` +
  //     `Sobrenome: ${req.body.sobrenomeCliente}`
  // );

  res.render("trataPost");
};
