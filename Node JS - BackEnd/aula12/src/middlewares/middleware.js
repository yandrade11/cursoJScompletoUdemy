module.exports = (req, res, next) => {
  //INTERCEPTANDO O VALOR QUE USUÁRIO DIGITOU
  if (req.body.cliente) {
    //ALTERANDO VALOR INTERCEPTADO, ANTES DE REGISTRAR
    req.body.cliente = req.body.cliente.replace(
      "Andrade",
      "não andrade, Bittencourt"
    );
    console.log(`Você postou: ${req.body.cliente}`);
  }

  //nunca esquecer de usar o next quando tiver usando um middleware
  next();
};

//OUTRA FORMA DE FAZER (PROVAVELMENTE MELHOR ESCRITA)
//obs: resposta desse middleware é um objeto
exports.middlewareGlobal = (req, res, next) => {
  next();
};

//NÃO TA FUNCIONANDO QUANDO BOTO APP.USE(middlewareGlobal) NO SERVER
