import ValidaCPF from "./ValidaCPF";

export default class GeraCPF {
  //  gera cpf random de 9 dígitos entre 100000000 e 999999999
  random(min = 100000000, max = 999999999) {
    //o nº que começa com 0 em JS, é uma string
    //afinal se fosse um Number, o 0 seria omitido/retirado
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formataCPF(cpf) {
    //como formatar cpf com pontuação
    return (
      cpf.slice(0, 3) +
      "." +
      cpf.slice(3, 6) +
      "." +
      cpf.slice(6, 9) +
      "-" +
      cpf.slice(9, 11)
    );
  }

  geraNovoCpf() {
    const cpfSemDigito = this.random();
    const digito1 = ValidaCPF.criaDigito(cpfSemDigito);
    const digito2 = ValidaCPF.criaDigito(cpfSemDigito + digito1);

    const novoCPF = cpfSemDigito + digito1 + digito2;

    return this.formataCPF(novoCPF);
  }
}
