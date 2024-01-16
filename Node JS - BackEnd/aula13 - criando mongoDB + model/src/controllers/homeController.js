//OBS: a modelagem de dados normalmente é feita na própria MODEL por isso nem precisa importar a model aqui

//IMPORTANDO MODEL NA CONTROLLER
const HomeModel = require("../models/HomeModel");

//CRIANDO BASE DE DADOS
HomeModel.create({
  titulo: "Terceiro exemplo.",
  descricao: "Descrição do terceiro dado criado na base.",
})
  .then((data) =>
    console.log(`\n --- dado registrado com sucesso. --- \n ${data}`)
  )
  .catch((error) => console.log(error));

//BUSCANDO DADOS EXISTENTES
HomeModel.find()
  .then((data) =>
    console.log(
      `\n --- agora vamos verificar como está a base de dados --- \n ${data}`
    )
  )
  .catch((error) => console.log(error));

//na controller é necessário sempre exportar para ser importado na router
exports.paginaInicial = (req, res) => {
  res.render("index");
};

exports.trataPost = (req, res) => {
  res.render("trataPost");
};
