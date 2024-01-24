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

  register() {
    this.valida();
  }

  valida() {
    this.isString();
    //o email precisa ser válida
    //a senha precisa ter entre 3 e 10 caracteres
  }

  isString() {
    //garantindo se dados são mesmo string
    for (const key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }

    //garantindo tratar somente os dados que eu quero
    this.body = {
      email: this.body.email,
      password: this.body.password,
    };
  }
}

module.exports = LoginModel;
