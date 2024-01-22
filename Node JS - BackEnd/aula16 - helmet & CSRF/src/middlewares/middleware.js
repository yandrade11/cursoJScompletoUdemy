module.exports = (req, res, next) => {
  //variavel local criada sem rota, num middleware global (pode ser usado em qualquer página)
  res.locals.umaVariavelLocal = 'Este é o valor da variável local no middleware.'

  //Exemplo: se eu uso essa umaVariavelLocal no titulo, que é importado pra todas as páginas, todas as páginas terão esse título definido no middleware

  //nunca esquecer de usar o next quando tiver usando um middleware
  next();
};

//OUTRA FORMA DE FAZER (PROVAVELMENTE MELHOR ESCRITA)
//obs: resposta desse middleware é um objeto
exports.middlewareGlobal = (req, res, next) => {
  next();
};

//NÃO TA FUNCIONANDO QUANDO BOTO APP.USE(middlewareGlobal) NO SERVER.js
