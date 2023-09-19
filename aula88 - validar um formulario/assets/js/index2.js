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
    const inputZAO = document.querySelectorAll("input");

    // inputZAO.forEach((input) => {
    //   if (!input.value) {
    //     console.log(
    //       `Campo "${input.name}" está vazio, por favor preencher todos os campos.`
    //     );

    //     return false;
    //   }
    // });

    for (const input of inputZAO) {
      if (!input.value) {
        console.log(
          `Campo "${input.name}" está vazio, por favor preencher todos os campos.`
        );
      }
    }

    if (this.usuario.value.length < 3 || this.usuario.value.length >= 12) {
      console.log("Usuário deve conter entre 3 e 12 caracteres.");
      return false;
    }

    if (!this.usuario.value.match(/[a-zA-Z0-9]/g)) {
      console.log("Usuário não pode conter caracter especial.");
      return false;
    }

    if (this.senha.value.length < 6 || this.senha.value.length > 12) {
      console.log("A senha deve conter entre 6 e 12 caracteres.");
      return false;
    }

    if (this.senha.value !== this.repetirSenha.value) {
      console.log("Os campos SENHA e REPETIR SENHA não conferem.");
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
