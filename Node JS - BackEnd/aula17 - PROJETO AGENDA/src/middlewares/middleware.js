//OBS: dessa forma tem que tirar o "{}" do import no server

// module.exports = (req, res, next) => {
//   //INTERCEPTANDO O VALOR QUE USUÁRIO DIGITOU
//   // if (req.body.cliente) {
//   //   //ALTERANDO VALOR INTERCEPTADO, ANTES DE REGISTRAR
//   //   req.body.cliente = req.body.cliente.replace(
//   //     "Andrade",
//   //     "não andrade, Yuri."
//   //   );
//   //   console.log(`Você postou: ${req.body.cliente}`);
//   // }

//   //nunca esquecer de usar o next quando tiver usando um middleware
//   next();
// };

//OUTRA FORMA DE FAZER (PROVAVELMENTE MELHOR ESCRITA)
//obs: resposta desse middleware é um objeto
exports.middlewareGlobal = (req, res, next) => {
  // variavel local criada sem rota, num middleware global (pode ser usado em qualquer página)
  res.locals.umaVariavelLocal =
    "Variável Local (pode ser usada em qualquer pagina).";
  next();
};
