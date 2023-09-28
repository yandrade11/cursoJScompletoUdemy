import ValidaCPF from '../js/ValidaCPF.js';

class Formulario {
  constructor() {
    this.nome = document.querySelector(".inputNome");
    this.sobrenome = document.querySelector(".inputSobrenome");
    this.cpf = document.querySelector(".inputCPF");
    this.usuario = document.querySelector(".inputUsuario");
    this.senha = document.querySelector(".inputSenha");
    this.repetirSenha = document.querySelector(".inputRepetirSenha");
    this.msgErro = document.querySelector('.error-text');
  }

  validar() {
    this.verificaInputVazio();
    this.verificaUsuario();
    this.verificaCaractereEspecialUsuario();
    this.verificaSenha();
    this.verificaRepetirSenha();
    this.handleCPF(this.cpf.value);
  }

  verificaInputVazio() {
    if (this.nome.value === "") {
      Formulario.criaLabelError(this.nome, `Campo "${this.nome.name}" está vazio, por favor preencher todos os campos.`);

      return false;
    } else {
      this.msgErro.remove();
    }

    if (this.sobrenome.value === "") {
      Formulario.criaLabelError(this.sobrenome, `Campo "${this.sobrenome.name}" está vazio, por favor preencher todos os campos.`);

      return false;
    }

    if (this.cpf.value === "") {
      Formulario.criaLabelError(this.cpf, `Campo "${this.cpf.name}" está vazio, por favor preencher todos os campos.`);

      return false;
    }

    if (this.usuario.value === "") {
      Formulario.criaLabelError(this.usuario, `Campo "${this.usuario.name}" está vazio, por favor preencher todos os campos.`);

      return false;
    }

    if (this.senha.value === "") {
      Formulario.criaLabelError(this.senha, `Campo "${this.senha.name}" está vazio, por favor preencher todos os campos.`);

      return false;
    }

    if (this.repetirSenha.value === "") {
      Formulario.criaLabelError(this.repetirSenha, `Campo "${this.repetirSenha.name}" está vazio, por favor preencher todos os campos.`);

      return false;
    }
  }

  static criaLabelError(inputClass, msg) {
    const label = document.createElement('label');
    label.innerHTML = msg;
    label.classList.add("error-text");
    label.style.color = 'red';
    label.style.fontSize = '0.6em';
    label.style.marginBottom = '5px'

    inputClass.before(label);
  }

  verificaUsuario() {
    if (this.usuario.value.length < 3 || this.usuario.value.length > 12) {
      console.log("Usuário deve conter entre 3 e 12 caracteres.");

      return false;
    }
  }

  verificaCaractereEspecialUsuario() {
    if (!this.usuario.value.match(/[a-zA-Z0-9]/g)) {
      console.log("Usuário não pode conter caracter especial.");

      return false;
    }
  }

  verificaSenha() {
    if (this.senha.value.length < 6 || this.senha.value.length > 12) {
      console.log("A senha deve conter entre 6 e 12 caracteres.");

      return false;
    }
  }

  verificaRepetirSenha() {
    if (this.senha.value !== this.repetirSenha.value) {
      console.log("Os campos SENHA e REPETIR SENHA não conferem.");

      return false;
    }
  }

  handleCPF(inputCPF) {
    const cpf = new ValidaCPF(inputCPF);

    if (!cpf.validar()) {
      Formulario.criaLabelError(this.cpf, `Campo "${this.cpf.name}" está inválido.`);

      return false;
    } else {
      this.msgErro.remove();
    }

    return true;
  }
}

const btn = document.querySelector(".botaoEnviar");

btn.addEventListener("click", () => {
  const u1 = new Formulario();
  if (u1.validar()) return console.log("Formulário enviado com sucesso");
});
