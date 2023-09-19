class Formulario {
  constructor() {
    this.nome = document.querySelector(".inputNome");
    this.sobrenome = document.querySelector(".inputSobrenome");
    this.cpf = document.querySelector(".inputCPF");
    this.usuario = document.querySelector(".inputUsuario");
    this.senha = document.querySelector(".inputSenha");
    this.repetirSenha = document.querySelector(".inputRepetirSenha");
  }

  validar() {
    Formulario.verificaInputVazio();
    this.verificaUsuario();
    this.verificaSenha();
  }

  static verificaInputVazio() {
    const inputZAO = document.querySelectorAll("input");

    inputZAO.forEach((input) => {
      if (!input.value) {
        alert(
          `Campo "${input.name}" está vazio, por favor preencher todos os campos.`
        );

        // return false;
        return false;
      }
    });
  }

  verificaUsuario() {
    if (this.usuario.value.length < 3 || this.usuario.value.length > 12) {
      alert("Usuário deve conter entre 3 e 12 caracteres.");
      return false;
    }

    if (!this.usuario.value.match(/[a-zA-Z0-9]/g)) {
      alert("Usuário não pode conter caracter especial.");
      return false;
    }
  }

  verificaSenha() {
    if (this.senha.value.length < 6 || this.senha.value.length > 12) {
      alert("A senha deve conter entre 6 e 12 caracteres.");
      return false;
    }

    if (this.senha.value !== this.repetirSenha.value) {
      alert("Os campos SENHA e REPETIR SENHA não conferem.");
      return false;
    }
  }
}

//tratar CPF
//tra


const btn = document.querySelector(".botaoEnviar");

btn.addEventListener("click", () => {
  const u1 = new Formulario();
  if (u1.validar()) return console.log("Formulário enviado com sucesso");
});
