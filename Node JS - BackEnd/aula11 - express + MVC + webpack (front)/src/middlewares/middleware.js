module.exports = (req, res, next) => {
  //INTERCEPTANDO O VALOR QUE USUÁRIO DIGITOU
  // if (req.body.cliente) {
  //   //ALTERANDO VALOR INTERCEPTADO, ANTES DE REGISTRAR
  //   req.body.cliente = req.body.cliente.replace(
  //     "Andrade",
  //     "não andrade, Yuri."
  //   );
  //   console.log(`Você postou: ${req.body.cliente}`);
  // }

  //variavel local criada sem rota, num middleware global (pode ser usado em qualquer página)
  res.locals.umaVariavelLocal =
    "Este é o valor da variável local no middleware.";

  //nunca esquecer de usar o next quando tiver usando um middleware
  next();
};

//OUTRA FORMA DE FAZER (PROVAVELMENTE MELHOR ESCRITA)
//obs: resposta desse middleware é um objeto
exports.middlewareGlobal = (req, res, next) => {
  next();
};
