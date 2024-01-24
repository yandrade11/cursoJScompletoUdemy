const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },

  // titulo: { type: String, required: true },
  // descricao: String,
});

const LoginModel = mongoose.model("Login", LoginSchema);

class Login {
  //recebendo dados
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }
}

module.exports = LoginModel;
