//na controller é necessário sempre exportar para ser importado na router
exports.paginaInicial = (req, res) => {
  //EXEMPLO SESSION:

  //salvo o nome Yuri e logado true por 7 dias no banco (pode ser visto pelo collections do site do mongo)
  // req.session.usuario = { nome: "Yuri", logado: true };
  // console.log(req.session.usuario);  //log só aparece após atualizar página

  //EXEMPLO FLASH MESSAGES

  //quanto atualiza página pela primeira vez você as salva
  // req.flash('info', "Olá Mundo!");
  // req.flash('error', "Errooooou!");
  // req.flash('success', "Suuuucesso!");

  //OBS: req.flash devolve um array, portanto você pode salvar várias mensagens pra uma única chave "info" por exemplo

  //depois que recuperar a primeira vez elas somem, na segunda (array vazio)
  console.log(req.flash("error"), req.flash("success"), req.flash("info"));

  res.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.render("trataPost");
  return;
};
