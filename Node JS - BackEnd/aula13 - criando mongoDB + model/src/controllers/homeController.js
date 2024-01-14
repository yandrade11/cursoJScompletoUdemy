//na controller é necessário sempre exportar para ser importado na router
exports.paginaInicial = (req, res) => {
  res.render("index");
};

exports.trataPost = (req, res) => {
  res.render("trataPost");
};
