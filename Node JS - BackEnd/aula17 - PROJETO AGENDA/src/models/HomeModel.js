const mongoose = require("mongoose");
const HomeSchema = new mongoose.Schema({
  //aqui vai os dados que você necessita separados por chave: tipo

  //colocar obrigatório
  titulo: { type: String, required: true },
  descricao: String,
});

const HomeModel = mongoose.model("Home", HomeSchema);

//EXPORTANDO HomeModel
module.exports = HomeModel;

//FORMA CORRETA DE ENVIAR/MODELAR DADOS É AQUI, NÃO NA CONTROLLER
// class Home {

// }

// module.exports = Home;

//OBS: comentado pois não funciona com o exports HomeModel